let list = [{ h: 1 }, {}, {}, { w: 5, h: 2,x:5,y:5 }]; // değer verilmeyince 1 olarak alıyor genişlik ve yüksekliği x ve y konumları bunlar servisten gelecek olanlar olarak düşünülebilir.

list.forEach((n, i) => {
    n.content =
      '<button class="delBtn" onClick="grid.removeWidget(this.parentNode.parentNode)">Sil</button>';
  });

  //başlangıç fonksiyonu db den gelen değerelere göre yapıyı oluşturacak 
  let grid = GridStack.init({
    float: true, //yukarı tarafın boş kalmasını istenmiyorsa false yapılmalı tru yapıldığında blokları yukarı doğru boş alana kaydırır.
    disableOneColumnMode: true,
    cellHeight: 100,
  }).load(list);

  //   ekleme, çıkarma, değiştirme işlemlerinden sonra çalışır hangi element üzerinde işlem yapıldığını öğrenmeyi sağlar eğer db'ye kayıt yapılacaksa istek burada atılacak 
  grid.on("added removed change", function (e, items) {
      let str = "";
      items.forEach(function (item) {
          str += " (x,y)=" + item.x + "," + item.y;
        });
        console.log(e.type + " " + items.length + " items:" + str);
    });
    
  // yeni bir bloğu ekleyen fonksiyon
    function addWidget() {
      console.log('list', list)
    let n = {
      w: 2, //genişlik
      h: 2, //yükseklik
      // eklenen bloğa içerik eklenecekse burada yazılır
      content:
        '<button class="delBtn" onClick="grid.removeWidget(this.parentNode.parentNode)">Sil</button>',
    };
    grid.addWidget(n);
  }