

mood1=Mood.create(mood_name: "Happy", mood_body: "That’s awesome! we are glad you feel happy, would you like to join the #happyChatroom
    and share your happiness with others ")
mood2=Mood.create(mood_name:"Sad",mood_body:"That’s okay, We all have those days when
    we feel sad, would you like to share with
    others on how you feel? or you can try out
    our random fun activities to do generator")
mood3=Mood.create(mood_name:"Stressed",mood_body:"sorry to hear, you feel stressed today,
    hoping that options we have make a   difference in your day, select one of the 
   following")
mood4=Mood.create(mood_name:"I feel it all", mood_body:"We understand that it can be confusing, would you like to join random chatroom?")



chatroom1=Chatroom.create(room_name:"Happy")
chatroom2=Chatroom.create(room_name:"Sad")
chatroom3=Chatroom.create(room_name:"Stressed")
chatroom4=Chatroom.create(room_name:"I feel it all")


user1=User.create(name:"Saloni",username:"Salonimehta",password_digest:"password123")

# message1=Message.create(user_id:user1.id,chatroom_id:chatroom1.id,message_body:"Hello")