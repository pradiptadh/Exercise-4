Pradipta Dwi Haryadi

haryadipradipta@gmail.com

if you want download or use my project make sure u run in webserver https://localhost:8887
or you will find error 

"Unable to submit form" error. 
If you're seeing this error, the cause may be one of the two explained in the error screen itself:

Rule

  -  You are testing your site by opening it in a browser as a static HTML file in your computer's filesystem. In this case its URL will not start with http:// or https://. This will not work, because browsers don't treat these pages as normal web resources and thus they do not automatically send the "Referer" header when you submit a form. Formspree requires that header to work. This can be solved if you just open your HTML files as a web resource from a local web server. If you're on Mac or Linux, just type python -m SimpleHTTPServer 8887 or your HTML files directory and visit http://localhost:8887 on your browser. If you're on Windows, try installing one of the following super simple web servers: Web server for Chrome, thttpd or Quickshare.
  - You are using an old Safari version, Safari mobile or some other browser that is not recent Chrome, Firefox or Edge. In this case you could have been a victim of an old HSTS policy we had on Formspree that didn't allow sites to post content to non-https versions of Formspree. In this case please change your form's action= attribute to https://formspree.io/<your-email>.

make sure u do that because thats rule from FormSpree thx u :)
