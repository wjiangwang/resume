var APP_ID = "5DwKyIB9mwhaBy2niHgAqkxV-gzGzoHsz";
var APP_KEY = "n257O9Ktq70CmR4j3EJebWlJ";

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


//加载留言
var query = new AV.Query("message");
query
  .find()
  .then(
    function(todos) {
      todos.forEach(function(todo) {
        let li = document.createElement("li");
        messageList.appendChild(li);
        li.innerHTML = `${todo.attributes.name}:${todo.attributes.message}`;
      });
    },
    function() {
      // 异常处理
      alert('提交失败，呜呜呜有BUG')
    }
  )



//存留言
postMessageForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var connectName=messageName.value;
  var connect = messageInput.value;
  if(connect){
    var Message = AV.Object.extend("message");
    var message = new Message();
    message
      .save({
        name:connectName, 
        message: connect
      })
      .then(function(object) {
          console.log(object)
          let li = document.createElement("li");
          messageList.appendChild(li);
          li.innerHTML = `${object.attributes.name}:${object.attributes.message}`;
          alert("留言成功");
          messageInput.value=''
      });
  }else{
      alert('请输入留言内容')
  }

});


