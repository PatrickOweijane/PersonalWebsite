import json
from channels.generic.websocket import AsyncWebsocketConsumer

class PongConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'pong_{self.room_name}'
        
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name,
        )

        await self.accept()

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'init_message',
                'init': 'hello world',
            }
        )

    async def init_message(self, event):
        init = event['init']

        await self.send(text_data=json.dumps({
            'init': init,
        }))
        print('sent init msg')

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name,
        )

    async def receive(self, text_data):
        print(f'received')
        data_json = json.loads(text_data)
        print(f'received {data_json=}')
        user_input = data_json['input']
        
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_coordinates',
                'user_input': user_input,
            }
        )
    
    async def send_coordinates(self, event):
        user_input = event['user_input']
        print(f'{user_input=}')

        await self.send(text_data=json.dumps({
            'user_input': user_input,
        }))
