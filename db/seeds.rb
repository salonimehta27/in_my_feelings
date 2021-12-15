

mood1=Mood.create(mood_name: "Happy", mood_body: "That’s awesome! we are glad you feel happy, would you like to join the #happyChatroom
    and share your happiness with others ")
mood2=Mood.create(mood_name:"Sad",mood_body:"That’s okay, We all have those days when
    we feel sad, would you like to share with
    others on how you feel?")
mood3=Mood.create(mood_name:"Stressed",mood_body:"Sorry to hear that you feel stressed today,
   we hope that talking about it, will help a little")
mood4=Mood.create(mood_name:"I feel it all", mood_body:"We understand that it can be confusing, would you like to join chatroom?")



chatroom1=Chatroom.create(room_name:"Happy")
chatroom2=Chatroom.create(room_name:"Sad")
chatroom3=Chatroom.create(room_name:"Stressed")
chatroom4=Chatroom.create(room_name:"I feel it all")


user1=User.create(name:"saloni",username:"salonimehta",password:"password123",password_confirmation:"password123",has_agreed:"true")
