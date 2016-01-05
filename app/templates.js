angular.module('blogApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('js/aboutme/aboutMeView.html',
    "<div class=\"about\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div class=\"centered avatar\">\r" +
    "\n" +
    "\t\t<img src=\"https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/4/000/159/02e/181feb8.jpg\" alt=\"avatar\" width=\"200px\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<p>I’m Dimitar and I am a software developer. I spend a lot of time sitting behind the pc monitor, so I’ve decided to build myself a blog and share some of the most memorable moments in my everyday life or post about things that I find interesting and useful.\r" +
    "\n" +
    "\t<br /><br />\r" +
    "\n" +
    "\tI’m a big football enthusiast as well as an amateur player and lately one of the discouraged Liverpool FC fans.\r" +
    "\n" +
    "\tOne of the main topics will be my fresh experience in the gym and my progress through time. I’ll share my weekly training program, so that the posts may give some ideas about exercises that can be used. \r" +
    "\n" +
    "\t<br /><br />\r" +
    "\n" +
    "\tYou can find me on various social networks listed below.</p>\r" +
    "\n" +
    "\t<br />\r" +
    "\n" +
    "\t<div class=\"centered\">\r" +
    "\n" +
    "\t<h3>Contact me:</h3>\r" +
    "\n" +
    "\t<ul class=\"social-icons inline-block\">\r" +
    "\n" +
    "\t\t<li><i class=\"icon fa-twitter\"></i><a href=\"https://twitter.com/ddimitrov_net\"><span>@ddimitrov_net</span></a></li>\r" +
    "\n" +
    "\t\t<li><i class=\"icon fa-book\"></i><a href=\"https://www.goodreads.com/user/show/37598700-dimitar\"><span>Goodreads</span></a></li>\r" +
    "\n" +
    "\t\t<li><i class=\"icon fa-linkedin\"></i><a href=\"https://www.linkedin.com/profile/view?id=106329385\"><span>LinkedIn</span></a></li>\r" +
    "\n" +
    "\t\t<li><i class=\"icon fa-instagram\"></i><a href=\"https://instagram.com/d1mitar/\"><span>Instagram</span></a></li>\r" +
    "\n" +
    "\t\t<li><i class=\"icon fa-envelope\"></i><a href=\"mailto:m1tkoregs@gmail.com\">Email me</a></li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "    "
  );


  $templateCache.put('js/components/archive/archiveView.html',
    "<h4>Archive</h4>\r" +
    "\n" +
    "    <ul class=\"nav nav--vertical\">\r" +
    "\n" +
    "        <li ng-repeat=\"(month, posts) in postsArchive\">\r" +
    "\n" +
    "            <a ui-sref=\"archive({month : month})\">{{ month + ' (' + posts.length + ')'}}</a>\r" +
    "\n" +
    "            <ul class=\"nav nav--vertical\">\r" +
    "\n" +
    "                <li ng-repeat=\"post in posts\"><a ui-sref=\"details({url : post.Url})\">{{ post.Title}}</a></li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>"
  );


  $templateCache.put('js/components/tagcloud/tagCloudView.html',
    "\r" +
    "\n" +
    "\t<ul class=\"inline-block post-tags\">\r" +
    "\n" +
    "\t\t<li ng-repeat=\"tag in tags\">\r" +
    "\n" +
    "\t\t\t<a ng-class=\"tag.CssClass\" ui-sref=\"search({tag : tag.Name})\">{{ tag.Name}}</a>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t</ul>"
  );


  $templateCache.put('js/details/commentsView.html',
    ""
  );


  $templateCache.put('js/details/detailsView.html',
    "<div class=\"articles\">\r" +
    "\n" +
    "    <div class=\"article\">\r" +
    "\n" +
    "        <div class=\"article-tag\">\r" +
    "\n" +
    "            <time>\r" +
    "\n" +
    "                <h4>{{ post.Date | date: 'MMM'}}</h4></time>\r" +
    "\n" +
    "            <time>\r" +
    "\n" +
    "                <h3>{{ post.Date | date: 'd'}}</h3></time>\r" +
    "\n" +
    "            <!-- <ul class=\"social-icons social-icons--vertical\">\r" +
    "\n" +
    "\t\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-facebook\"></span><span>15</span></a></li>\r" +
    "\n" +
    "\t\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-comment\"></span></span><span>4</span></a></li>\r" +
    "\n" +
    "\t\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-heart\"></span><span>10</span></a></li>\r" +
    "\n" +
    "\t\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-twitter\"></span><span>12</span></a></li>\r" +
    "\n" +
    "\t\t\t\t</ul> -->\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <h1>{{ post.Title}}</h1>\r" +
    "\n" +
    "            <div ng-bind-html=\"post.Content | sanitize\" class=\"article-content\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <ul class=\"post-tags inline-block post-tags--content margin-top-m\">\r" +
    "\n" +
    "            <li ng-repeat=\"tag in post.Tags\">\r" +
    "\n" +
    "                <a href='#/search/{{ tag }}'>{{ tag }}</a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "        <h3 class=\"margin-top-m\">Comments:</h3>\r" +
    "\n" +
    "        <section>\r" +
    "\n" +
    "            <dir-disqus disqus-shortname=\"ddimitrov\" disqus-identifier=\"{{ post.Id }}\" disqus-url=\"{{ disqusUrl }}\" ready-to-bind=\"{{ contentLoaded }}\">\r" +
    "\n" +
    "            </dir-disqus>\r" +
    "\n" +
    "        </section>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('js/fitness/fitnessView.html',
    "<div class=\"articles\" infinite-scroll='loadBlogPosts()' infinite-scroll-disabled='isLoading' infinite-scroll-distance='2'>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"article\" ng-repeat=\"bp in blogPosts\">\r" +
    "\n" +
    "    \t<div class=\"article-tag\">\r" +
    "\n" +
    "\t\t\t<h4> {{ bp.Date | date : \"MMM\" }}</h4>\r" +
    "\n" +
    "\t\t\t<h3> {{ bp.Date | date : \"d\" }} </h3>\r" +
    "\n" +
    "<!-- \t\t\t\t\t<ul class=\"social-icons social-icons--vertical\">\r" +
    "\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-facebook\"></span><span>15</span></a></li>\r" +
    "\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-comment\"></span></span><span>4</span></a></li>\r" +
    "\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-heart\"></span><span>10</span></a></li>\r" +
    "\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-twitter\"></span><span>12</span></a></li>\r" +
    "\n" +
    "\t\t\t</ul> -->\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "        <h1><a ui-sref=\"details({url : bp.Url})\">{{bp.Title}}</a></h1>\r" +
    "\n" +
    "        <!-- <h3> A free fully responsive thing</h3> -->\r" +
    "\n" +
    "        <div class=\"content\">\r" +
    "\n" +
    "            <p>{{ bp.Summary }}</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div> \r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('js/home/homeView.html',
    "<div class=\"articles\" infinite-scroll='loadBlogPosts()' infinite-scroll-disabled='isLoading' infinite-scroll-distance='2'>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"article\" ng-repeat=\"bp in blogPosts\">\r" +
    "\n" +
    "    \t<div class=\"article-tag\">\r" +
    "\n" +
    "\t\t\t<h4> {{ bp.Date | date : \"MMM\" }}</h4>\r" +
    "\n" +
    "\t\t\t<h3> {{ bp.Date | date : \"d\" }} </h3>\r" +
    "\n" +
    "<!-- \t\t\t\t\t<ul class=\"social-icons social-icons--vertical\">\r" +
    "\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-facebook\"></span><span>15</span></a></li>\r" +
    "\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-comment\"></span></span><span>4</span></a></li>\r" +
    "\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-heart\"></span><span>10</span></a></li>\r" +
    "\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-twitter\"></span><span>12</span></a></li>\r" +
    "\n" +
    "\t\t\t</ul> -->\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "        <h1><a ui-sref=\"details({url : bp.Url})\">{{bp.Title}}</a></h1>\r" +
    "\n" +
    "        <!-- <h3> A free fully responsive thing</h3> -->\r" +
    "\n" +
    "        <div class=\"content\">\r" +
    "\n" +
    "            <p>{{ bp.Summary }}</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div> \r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('js/search/searchView.html',
    "<div class=\"articles\">\r" +
    "\n" +
    "    <div class=\"article\" ng-repeat=\"bp in blogPosts\">\r" +
    "\n" +
    "    \t<div class=\"article-tag\">\r" +
    "\n" +
    "\t\t\t<h4> {{ bp.Date | date : \"MMM\" }}</h4>\r" +
    "\n" +
    "\t\t\t<h3> {{ bp.Date | date : \"d\" }} </h3>\r" +
    "\n" +
    "<!-- \t\t\t\t\t<ul class=\"social-icons social-icons--vertical\">\r" +
    "\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-facebook\"></span><span>15</span></a></li>\r" +
    "\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-comment\"></span></span><span>4</span></a></li>\r" +
    "\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-heart\"></span><span>10</span></a></li>\r" +
    "\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-twitter\"></span><span>12</span></a></li>\r" +
    "\n" +
    "\t\t\t</ul> -->\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "        <h1><a ui-sref=\"details({url : bp.Url})\">{{bp.Title}}</a></h1>\r" +
    "\n" +
    "        <!-- <h3> A free fully responsive thing</h3> -->\r" +
    "\n" +
    "        <div class=\"content\">\r" +
    "\n" +
    "            <p>{{ bp.Summary }}</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div> \r" +
    "\n" +
    "</div>"
  );

}]);
