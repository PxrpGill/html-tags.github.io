(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const p of e.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function d(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const s="article - Независимый блок контента, например, статья или пост в блоге",i="section - определяет раздел в документе",a="nav - навигационная панель сайта, на которой находятся ссылки",l="aside - боковой блок страницы, сайдбар",u="<h1>Это h1</h1><h2>Это h2</h2><h3>Это h3</h3><h4>Это h4</h4><h5>Это h5</h5><h6>Это h6</h6>",b="hgroup - используется для группирования заголовков веб-страницы или раздела. Внутри располагаются один тег из заголовков, за которым следует ноль или больше p тегов",m="header - шапка страницы",f="footer - подвал страницы",y="address - содержит адрес (контактные данные создателя сайта)",h="p - Абзац текста",g="hr - разделительная линия абзацев <hr>",k="<pre>pre - представляет собой предварительно отформатированный текст, который должен быть представлен точно так, как написано в HTML-файле.</pre>",v="<blockquote><p>blocjquote - указывает на то, что заключённый в нем текст является развёрнутой цитатой.</p></blockquote><p>-Развернутая цитата</p>",w="<ul><li>ul - то неупорядоченный список</li><li>ul - то неупорядоченный список</li><li>ul - то неупорядоченный список</li></ul>",T="<ol><li>ol - то упорядоченный список</li><li>ol - то упорядоченный список</li><li>ol - то упорядоченный список</li></ol>",q="li - элемент списка",x="<p>menu - предназначен для отображения списка пунктов меню</p><menu><li>Пункт меню</li><li>Пункт меню</li><li>Пункт меню</li></menu>",L="dl - элемент списка описаний",N="<p>dt - список терминов</p><dl><dt>Тег dt - Список терминов</dt><dd>Тег dt - описание терминов</dd></dl>",j="<p>dd - описание терминов</p><dl><dt>Тег dt - Список терминов</dt><dd>Тег dt - описание терминов</dd></dl>",B="<p>figure - Используется для группирования любых элементов, например, изображений и подписей к ним</p><figure><img src='https://img.freepik.com/free-photo/close-up-on-adorable-kitten-indoors_23-2150782423.jpg'><figcaption>Тег figcaption - используется для подписи группирования пар элементов</figcaption></figure>",I="<p>figcaption - используется для подписи группирования пар элементов</p><figure><img src='https://img.freepik.com/free-photo/close-up-on-adorable-kitten-indoors_23-2150782423.jpg'><figcaption>Тег figcaption - используется для подписи группирования пар элементов</figcaption></figure>",O="main - Предназначен для основного контента",_="search - раздел страницы, который используется для поиска",C="div - определяет контейнер для группировки элементов",E="<a href='https://www.google.com/'>a - определяет гиперссылку</a>",M="<em>em - предназначен для слов, которые имеют подчёркнутый акцент по сравнению с окружающим текстом</em>",P="<strong>strong - указывает на то, что его содержание имеет большое значение, серьёзность или срочность</strong>",H="<small>small -  уменьшает размер шрифта на единицу по сравнению с обычным текстом</small>",S="<s>s - отображает текст как перечеркнутый</s>",A="<cite>cite - представляет из себя ссылку на источник цитаты</cite>",D="<q>q - используется для выделения в тексте цитат</q>",G="<dfn>dfn - используется для указания термина, определяемого в контексте фразы или предложения</dfn>",R="<p>abbr - указывает, что последовательность символов является аббревиатурой</p><p><abbr title='Common Gateway Interface, общий шлюзовый интерфейс'>CGI</abbr>обозначается протокол, с помощью которого любые внешние программы взаимодействуют с веб-сервером.</p>",F="<p>ruby - предназначен для добавления небольшой аннотации сверху или снизу от заданного текста.<br>Такая форма записи преимущественно используется для идеографической письменности вроде китайского языка, но может применяться и для других языков, если требуется написать один текст над другим.</p>",J="<p>Сам тег ruby выступает контейнером для тега rt, он и формирует аннотацию к тексту, после которого идет; а также rp, этот тег предназначен для браузеров, которые не поддерживают ruby.</p><ruby>漢<rt>かん</rt>字<rt>じ</rt></ruby>",K="<p>Сам тег ruby выступает контейнером для тега rt, он и формирует аннотацию к тексту, после которого идет; а также rp, этот тег предназначен для браузеров, которые не поддерживают ruby.</p><ruby>漢<rt>かん</rt>字<rt>じ</rt></ruby>",W="data - отображает заданное значение в машиночитаемом формате. Он часто используется в сочетании с другими тегами для более удобного представления числовых или статистических данных.",$="<p>time - помечает текст внутри тега как дата, время или оба значения</p><p><time>1957-10-04</time> запущен первый искусственный спутник Земли.</p>",z="<p>code - используется для отображения кода (скрипта)</p><code>print('Hello world!')</code>",Q="<p>samp - используется для отображения текста, который является результатом вывода компьютерной программы или скрипта</p><samp>Ваш браузер поддерживает JavaScript 1.3</samp>",U="<p>kbd - используется для обозначения текста, который набирается на клавиатуре или для названия клавиш</p><kbd>&lt;Alt&gt;+&lt;Backspace&gt;</kbd>",V="<p>sub - отображает текст в виде нижнего индекса</p><p>e<sub>2</sub></p>",X="<p>sup - отображает текст в виде вверхнего индекса</p><p>e<sup>x2</sup></p>",Y="<i>i - устанавливает курсивное начертание шрифта</i>",Z="<b>b - устанавливает жирное начертание шрифта</b>",tt="<u>u - добавляет подчеркивание к тексту</u>",et="<mark>mark - помечает текст как выделенный</mark>",ot="<bdi>bdi - указывает фрагмент текста, который должен быть изолирован от изменения направления вывода текста</bdi>",pt="<bdo>bdo - устанавливает направление вывода текста и преимущественно предназначен для использования с языками, где чтение происходит справа налево</bdo>",rt="<span>span - тег для выделения текста</span>",nt="<p>br - отвечает за переход<br> на новую строку</p>",ct="<p>wbr - указывает браузеру место, где допускается делать перенос строки в тексте, если этого требует ширина родительского элемента</p>",dt="<ins>ins - предназначен для выделения текста, который был добавлен в новую версию документа. Подобное форматирование позволяет отследить, какие изменения в тексте документа были сделаны</ins>",st="<del>del - используется для выделения текста, который был удален в новой версии документа</del>",it="<p>picture - адаптирует картинки под разные устройства и поддерживаемые форматы.</p>",at="<p>source - вставляет звуковой или видеофайл для тегов audio и video. Обобщенно такие файлы называются медийными</p>",lt="<p>img - тег, отвечающий за изображение</p>",ut="<p> iframe - создает плавающий фрейм, который находится внутри обычного документа, он позволяет загружать в область заданных размеров любые другие независимые документы</p>",bt="<p>embed - используется для загрузки и отображения объектов (например, видеофайлов, флэш-роликов, некоторых звуковых файлов и т.д.), которые исходно браузер не понимает.<br> Как правило, такие объекты требуют подключения к браузеру специального модуля, который называется плагин, или запуска вспомогательной программы</p>",mt="<p>object - сообщает браузеру, как загружать и отображать объекты, которые исходно браузер не понимает.<br>Как правило, такие объекты требуют подключения к браузеру специального модуля, который называется плагин, или запуска вспомогательной программы</p>",ft="video - отвечает за отображение видео-файла",yt="audio - отвечает за отображение аудио-файла",ht="track - позволяет авторам указать текстовую дорожку для медийных элементов audio и video",gt="map - служит контейнером для элементов area, которые определяют активные области для карт-изображений",kt="area - задает форму области, ее размеры, устанавливает адрес документа, на который следует сделать ссылку, а также имя окна или фрейма, куда браузер будет загружать документ.",vt="table - отвечает за создание таблицы",wt="<p>caption - предназначен для заголовка таблицы</p><table><caption>Заголовок таблицы</caption><tr><td>Элемент таблицы</td><td>Элемент таблицы</td></tr><tr><td>Элемент таблицы</td><td>Элемент таблицы</td></tr></table>",Tt="<p>colgroup - предназначен для задания ширины и стиля одной или нескольких колонок таблицы</p>",qt="<p>col - задает группу колонок, обладающх общими характеристиками</p>",xt="<p>tbody - предназначен для хранения одной или нескольких строк в теле таблицы.<br>Это позволяет создавать структурные блоки.</p><table><tbody><tr><td>Элемент таблицы</td><td>Элемент таблицы</td></tr></tbody></table>",Lt="<p>thead - предназначен для хранения одной или нескольких строк, которые представлены вверху таблицы.<br>Допустимо использовать не более одного элемента thead.</p><table style='width: 600px'><thead style='background: #fc0'><tr><td>Thead</td><td>Thead</td></tr></thead><tbody style='background: #ccc'><tr><td>Tbody</td><td>Tbody</td></tr></tbody></table>",Nt="<p>tfoot - предназначен для хранения одной или нескольких строк, которые представлены внизу таблицы</p><table style='width: 600px'><thead style='background: #fc0'><tr><td>Thead</td><td>Thead</td></tr></thead><tbody style='background: #ccc'><tr><td>Tbody</td><td>Tbody</td></tr></tbody><tfoot style='background: silver'><tr><td>Tfoot</td><td>Tfoot</td></tr></tfoot></table>",jt="tr - представляет собой строку таблицы",Bt="td - представяет собой элемент таблицы",It="th - предназначен для создания одной ячейки таблицы, которая обозначается как заголовочная",Ot="form - устанавливает форму на веб-странице. Форма предназначена для обмена данных между клиентом и сервером",_t="<p>label - устанавливает связь между определенной меткой, в качестве которой обычно выступает текст, и элементом формы (input, select, area)</p><form><input id='index'><label for='index'>Это label</label></form>",Ct="<form><p>type=text</p><input type='text' placeholder='Введите текст'><p>type=tel</p><input type='tel' placeholder='Для ввода номера телефона'><p>type=email</p><input type='email' placeholder='Для ввода почты'></form>",Et="<form><p>type=date</p><input type='date'><p>type=month</p><input type='month'><p>type=week</p><input type='week'><p>type=time</p><input type='time'><p>type=datetime-local</p><input type='datetime-local'></form>",Mt="<form><p>type=number</p><input type='number'><p>type=range</p>20<input type='range'>120</form>",Pt="<form><p>type=color</p><input type='color'></form>",Ht="<form><p>type=radio</p><input type='radio'>Значение<p>type=checkbox</p><input type='checkbox'>Галочка</form>",St={article:s,section:i,nav:a,aside:l,h:u,hgroup:b,header:m,footer:f,address:y,p:h,hr:g,pre:k,blockquote:v,ul:w,ol:T,li:q,menu:x,dl:L,dt:N,dd:j,figure:B,figcaption:I,main:O,search:_,div:C,a:E,em:M,strong:P,small:H,s:S,cite:A,q:D,dfn:G,abbr:R,ruby:F,rt:J,rp:K,data:W,time:$,code:z,var:"<p>var - используется для выделения переменных компьютерных программ</p><p>В данном примере делается запрос к базе данных для получения поля <var>content_title</var></p",samp:Q,kbd:U,sub:V,sup:X,i:Y,b:Z,u:tt,mark:et,bdi:ot,bdo:pt,span:rt,br:nt,wbr:ct,ins:dt,del:st,picture:it,source:at,img:lt,iframe:ut,embed:bt,object:mt,video:ft,audio:yt,track:ht,map:gt,area:kt,table:vt,caption:wt,colgroup:Tt,col:qt,tbody:xt,thead:Lt,tfoot:Nt,tr:jt,td:Bt,th:It,form:Ot,label:_t,inputText:Ct,inputDate:Et,inputNum:Mt,inputColor:Pt,inputRadio:Ht},At=St,Dt=document.getElementById("messageTemplate"),r=Dt.content.cloneNode(!0),Gt=r.getElementById("dialogWindow"),Rt=r.getElementById("message");window.open_dialog=function(n,o){document.querySelector(o).append(r),Rt.innerHTML=At[n],Gt.showModal()};
