Month=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]
var date=new Date();
document.write("Сегодня "+date.getDate()+" "+Month[date.getMonth()]+" "+date.getFullYear()+" года")