!function() {
  var view = document.querySelector("message");
  var moldel = {
    AVinit: function() {
      var APP_ID = "5DwKyIB9mwhaBy2niHgAqkxV-gzGzoHsz";
      var APP_KEY = "n257O9Ktq70CmR4j3EJebWlJ";
      AV.init({ appId: APP_ID, appKey: APP_KEY });
    },
    //获取数据
    fetch: function() {
      var query = new AV.Query("message");
      return query.find();
    },
    //创建数据
    save: function(connectName, connect) {
      var Message = AV.Object.extend("message");
      var message = new Message();
      return message.save({
        name: connectName,
        message: connect
      });
    }
  };
  var control = {
    view: null,
    moldel: null,
    init: function(view, moldel) {
      this.moldel = moldel;
      this.view = view;
      this.moldel.AVinit();
      this.loadMessages();
      this.bindEvents();
    },
    loadMessages: function() {
      this.moldel.fetch().then(
        function(todos) {
          todos.reverse()
          todos.forEach(function(todo) {
            let li = document.createElement("li");
            messageList.appendChild(li);
            li.innerHTML = `${todo.attributes.name}:${todo.attributes.message}`;
          });
        },
        function() {
          // 异常处理
          alert("提交失败，呜呜呜有BUG");
        }
      );
    },
    bindEvents: function() {
      postMessageForm.addEventListener(
        "submit",
        function(e) {
          e.preventDefault();
          this.saveMessages();
        }.bind(control)
      );
    },
    saveMessages: function() {
      var connectName = messageName.value;
      var connect = messageInput.value;
      if (connect) {
        this.moldel.save(connectName, connect).then(function(object) {
          let li = document.createElement("li");
          messageList.insertBefore(li,messageList.firstChild);
          li.innerHTML = `${object.attributes.name}:${
            object.attributes.message
          }`;
          alert("留言成功");
          messageInput.value = "";
        });
      } else {
        alert("请输入留言内容");
      }
    }
  };

  control.init(view, moldel);
}.call();

