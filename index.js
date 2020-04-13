const PAGE ={
    init:function(){
      this.bind()
    },
    bind:function(){
      let bookItem = $('.book-item');
      bookItem.on('click',this.bookItemClick);
    },
    bookItemClick:function(){
      let bookIntr = $('.book-intr');
      let id = $(this).data("id")
      axios.get(`https://www.jevescript.com/api/isbn/${id}`).then(res =>{
        let author = res.data.data.author;
        let author_intro = res.data.data.author_intro;
        let pubdate = res.data.data.pubdate;
        let price = res.data.data.price
        let image = res.data.data.image;
        let translator = res.data.data.translator;
        let boodData = `
        <div class="bookData-info">
          <img src="${image}">
          <div class="bookData-info-ex">
            <a href="">作者：${author}</a>
            <p>出版年：${pubdate}</p>
            <p>译者：${translator}</p>
            <p>定价：${price}</p>
            <p>ISBM：${id}</p>
          </div>
        </div>
        <p class="about-author">作者介绍：</br> &emsp;&emsp;${author_intro}</p>
        `;
        bookIntr.html(boodData);
      })
    }
  }
PAGE.init();