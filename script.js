const RSS_URL = `https://rss.app/feeds/edkxpmxhABkScYsd.xml`;

$.ajax(RSS_URL,{accepts: {xml: "application/rss+xml"},
  dataType: "xml",success: function(data) {$(data).find("item").each(function() {const el = $(this);
const template = `
<ul>
<li>
<div class="content">
    <h3>
            <a href="${el.find("link").text()}" target="_blank" rel="noopener">${el.find("title").text()}
            </a>
    </h3>
${el.find("description").text()}
</div>
<div class="point"></div>
    <div class="date">
       <h4> ${el.find("pubDate").text()} </h4>
    </div>
</li>
</ul>
</div>
        `;
        var f= document.getElementById("timeline");                                                                        
         f.insertAdjacentHTML("beforeend", template);
      });
  }
});