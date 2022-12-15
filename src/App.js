import './App.css';
import ListContact from "./ListContact"
import BodyChat from "./BodyChat"
import { useState } from 'react';

const messages = [
  {
    name: "Виктор",
    body: [{
      id: 'chat-5-1090',
      from: { name: 'Ольга' },
      type: 'response',
      time: '10:10',
      text: 'Привет, Виктор. Как дела? Как идёт работа над проектом?'
    }, {
      id: 'chat-5-1091',
      from: { name: 'Виктор' },
      type: 'message',
      time: '10:12',
      text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
    }, {
      id: 'chat-5-1092',
      from: { name: 'Ольга' },
      type: 'response',
      time: '10:14',
      text: 'Не уверена, что сегодня получится. Всё ещё в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
    }, {
      id: 'chat-5-1093',
      from: { name: 'Виктор' },
      type: 'message',
      time: '10:20',
      text: 'Нет, всё прошло гладко. Очень хочу показать всё команде.'
    }, {
      id: 'chat-5-1094',
      from: { name: 'Виктор' },
      type: 'typing',
      time: '10:31'
    }]
  },
  {
    name: "Женя",
    body: [{
      id: 'chat-5-1090',
      from: { name: 'Ольга' },
      type: 'response',
      time: '10:10',
      text: 'Увы, любая техника имеет свойство со временем выходить из строя, и её приходится либо заменять, либо чинить.'
    }, {
      id: 'chat-5-1091',
      from: { name: 'Женя' },
      type: 'message',
      time: '10:12',
      text: 'Я съел мюсли.'
    }, {
      id: 'chat-5-1092',
      from: { name: 'Ольга' },
      type: 'response',
      time: '10:14',
      text: 'Моя подруга тратит деньги просто так.'
    }, {
      id: 'chat-5-1093',
      from: { name: 'Женя' },
      type: 'message',
      time: '10:20',
      text: 'Я съел леденец.'
    }, {
      id: 'chat-5-1094',
      from: { name: 'Женя' },
      type: 'typing',
      time: '10:31'
    }]
  }
]

var avatars = ["face", "psychology", "mood", "boy", "skeleton"];

const users = [];
messages.forEach(message => {
  users.push({
    name: message["name"],
    avatar: avatars.pop()
  });
})

function App() {
  const [user, setUser] = useState({
    name: "React",
    body: [],
    avatar: "psychology"
  });
  const makeUser = (name, avatar) =>{
    let body = [];
    messages.forEach(_user => {
      if(_user["name"] === name) body = _user["body"];
    })
    let _user = {
      name: name,
      body: body,
      avatar: avatar
    }
    setUser(_user);
  }
  return (
    <div className="App">
      <ListContact list={users} func={makeUser}/>
      <BodyChat messages={user}/>
    </div>
  );
}

export default App;
