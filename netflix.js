var disqus_config = function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('jbv');
    this.page.url = '${window.location.href}';  
    this.page.identifier = '${window.location.href.replace(/\D/g, "")}';
};

(function () { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://netflix-com.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();

document.getElementsByClassName('about-header')[0].innerHTML = '<div id="disqus_thread">F2C</div>'