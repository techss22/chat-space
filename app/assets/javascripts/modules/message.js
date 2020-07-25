$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
      `<div class="chat-main_message-box" data-message-id=${message.id}>
          <div class="chat-main_message-info">
            <div class="chat-main_message-user">
              ${message.user_name}
            </div>
            <div class="chat-main_message-day">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main_Message-field">
            <p class="chat-main_Message-coment">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="chat-main_message-box" data-message-id=${message.id}>
        <div class="chat-main_message-info">
          <div class="chat-main_message-user">
            ${message.user_name}
          </div>
          <div class="chat-main_message-day">
            ${message.created_at}
          </div>
        </div>
        <div class="chat-main_Message-field">
          <p class="chat-main_Message-coment">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })

    .done(function(data){
      let html = buildHTML(data);
      $('.chat-main_message-list').append(html);      
      $('form')[0].reset();
      $('.chat-main_message-list').animate({ scrollTop: $('.chat-main_message-list')[0].scrollHeight});
      $('.chat-main_message-form-botan').prop('disabled', false);
    })

    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop("disabled", false);
    });
});
})