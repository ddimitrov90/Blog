angular.module('blogApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('js/aboutme/aboutMeView.html',
    "<div class=\"about\">\n" +
    "\n" +
    "\t<div class=\"centered avatar\">\n" +
    "\t\t<img src=\"https://bs3.cdn.telerik.com/v1/la2ryjFXLtQcEEUP/53d25b50-3566-11e6-9203-6f0a572df0c1\" alt=\"avatar\" width=\"200px\">\n" +
    "\t</div>\n" +
    "\t<p>I’m Dimitar and I am a software developer. I spend a lot of time sitting behind the pc monitor, so I’ve decided to build myself a blog and share some of the most memorable moments in my everyday life or post about things that I find interesting and useful. I’m a big football enthusiast as well as an amateur player and lately one of the discouraged Liverpool FC fans.\n" +
    "\t<br /><br />\n" +
    "\tYou can find me on various social networks listed below.</p>\n" +
    "\t<br />\n" +
    "\t<div hljs hljs-language=\"swift\">\n" +
    "class SomeClass {\n" +
    "\t \t\t\t   // class definition goes here\n" +
    "\t\t   let a: Int = 5\n" +
    "}\n" +
    "struct SomeStructure {\n" +
    "    // structure definition goes here\n" +
    "}\n" +
    "\t</div>\n" +
    "\t<div class=\"centered\">\n" +
    "\t<h3>Contact me:</h3>\n" +
    "\t<ul class=\"social-icons inline-block\">\n" +
    "\t\t<li><i class=\"icon fa-twitter\"></i><a href=\"https://twitter.com/ddimitrov_net\"><span>@ddimitrov_net</span></a></li>\n" +
    "\t\t<li><i class=\"icon fa-book\"></i><a href=\"https://www.goodreads.com/user/show/37598700-dimitar\"><span>Goodreads</span></a></li>\n" +
    "\t\t<li><i class=\"icon fa-linkedin\"></i><a href=\"https://www.linkedin.com/profile/view?id=106329385\"><span>LinkedIn</span></a></li>\n" +
    "\t\t<li><i class=\"icon fa-instagram\"></i><a href=\"https://instagram.com/d1mitar/\"><span>Instagram</span></a></li>\n" +
    "\t\t<li><i class=\"icon fa-envelope\"></i><a href=\"mailto:m1tkoregs@gmail.com\">Email me</a></li>\n" +
    "\t</ul>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "    "
  );


  $templateCache.put('js/components/archive/archiveView.html',
    "<h4>Archive</h4>\n" +
    "    <ul class=\"nav nav--vertical\">\n" +
    "        <li ng-repeat=\"(month, posts) in postsArchive\">\n" +
    "            <a ui-sref=\"archive({month : month})\">{{ month + ' (' + posts.length + ')'}}</a>\n" +
    "            <ul class=\"nav nav--vertical\">\n" +
    "                <li ng-repeat=\"post in posts\"><a ui-sref=\"details({url : post.Url})\">{{ post.Title}}</a></li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "    </ul>"
  );


  $templateCache.put('js/components/tagcloud/tagCloudView.html',
    "\n" +
    "\t<ul class=\"inline-block post-tags\">\n" +
    "\t\t<li ng-repeat=\"tag in tags\">\n" +
    "\t\t\t<a ng-class=\"tag.CssClass\" ui-sref=\"search({tag : tag.Name})\">{{ tag.Name}}</a>\n" +
    "\t\t</li>\n" +
    "\t</ul>"
  );


  $templateCache.put('js/details/commentsView.html',
    ""
  );


  $templateCache.put('js/details/detailsView.html',
    "<div class=\"articles\">\n" +
    "    <div class=\"article\">\n" +
    "        <div class=\"article-tag\">\n" +
    "            <time>\n" +
    "                <h4>{{ post.Date | date: 'MMM'}}</h4></time>\n" +
    "            <time>\n" +
    "                <h3>{{ post.Date | date: 'd'}}</h3></time>\n" +
    "            <!-- <ul class=\"social-icons social-icons--vertical\">\n" +
    "\t\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-facebook\"></span><span>15</span></a></li>\n" +
    "\t\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-comment\"></span></span><span>4</span></a></li>\n" +
    "\t\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-heart\"></span><span>10</span></a></li>\n" +
    "\t\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-twitter\"></span><span>12</span></a></li>\n" +
    "\t\t\t\t</ul> -->\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <h1>{{ post.Title}}</h1>\n" +
    "            <div ng-bind-html=\"post.Content | sanitize\" class=\"article-content\"></div>\n" +
    "        </div>\n" +
    "        <ul class=\"post-tags inline-block post-tags--content margin-top-m\">\n" +
    "            <li ng-repeat=\"tag in post.Tags\">\n" +
    "                <a href='#/search/{{ tag }}'>{{ tag }}</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <h3 class=\"margin-top-m\">Comments:</h3>\n" +
    "        <section>\n" +
    "            <dir-disqus disqus-shortname=\"ddimitrov\" disqus-identifier=\"{{ post.Id }}\" disqus-url=\"{{ disqusUrl }}\" ready-to-bind=\"{{ contentLoaded }}\">\n" +
    "            </dir-disqus>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('js/fitness/fitnessView.html',
    "<div class=\"articles\" infinite-scroll='loadBlogPosts()' infinite-scroll-disabled='isLoading' infinite-scroll-distance='2'>\n" +
    "\n" +
    "    <div class=\"article\" ng-repeat=\"bp in blogPosts\">\n" +
    "    \t<div class=\"article-tag\">\n" +
    "\t\t\t<h4> {{ bp.Date | date : \"MMM\" }}</h4>\n" +
    "\t\t\t<h3> {{ bp.Date | date : \"d\" }} </h3>\n" +
    "<!-- \t\t\t\t\t<ul class=\"social-icons social-icons--vertical\">\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-facebook\"></span><span>15</span></a></li>\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-comment\"></span></span><span>4</span></a></li>\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-heart\"></span><span>10</span></a></li>\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-twitter\"></span><span>12</span></a></li>\n" +
    "\t\t\t</ul> -->\n" +
    "\t\t</div>\n" +
    "        <h1><a ui-sref=\"details({url : bp.Url})\">{{bp.Title}}</a></h1>\n" +
    "        <!-- <h3> A free fully responsive thing</h3> -->\n" +
    "        <div class=\"content\">\n" +
    "            <p>{{ bp.Summary }}</p>\n" +
    "        </div>\n" +
    "    </div> \n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('js/home/homeView.html',
    "<div class=\"articles\" infinite-scroll='loadBlogPosts()' infinite-scroll-disabled='isLoading' infinite-scroll-distance='2'>\n" +
    "\n" +
    "    <div class=\"article\" ng-repeat=\"bp in blogPosts\">\n" +
    "    \t<div class=\"article-tag\">\n" +
    "\t\t\t<h4> {{ bp.Date | date : \"MMM\" }}</h4>\n" +
    "\t\t\t<h3> {{ bp.Date | date : \"d\" }} </h3>\n" +
    "<!-- \t\t\t\t\t<ul class=\"social-icons social-icons--vertical\">\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-facebook\"></span><span>15</span></a></li>\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-comment\"></span></span><span>4</span></a></li>\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-heart\"></span><span>10</span></a></li>\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-twitter\"></span><span>12</span></a></li>\n" +
    "\t\t\t</ul> -->\n" +
    "\t\t</div>\n" +
    "        <h1><a ui-sref=\"details({url : bp.Url})\">{{bp.Title}}</a></h1>\n" +
    "        <!-- <h3> A free fully responsive thing</h3> -->\n" +
    "        <div class=\"content\">\n" +
    "            <p>{{ bp.Summary }}</p>\n" +
    "        </div>\n" +
    "    </div> \n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('js/search/searchView.html',
    "<div class=\"articles\">\n" +
    "    <div class=\"article\" ng-repeat=\"bp in blogPosts\">\n" +
    "    \t<div class=\"article-tag\">\n" +
    "\t\t\t<h4> {{ bp.Date | date : \"MMM\" }}</h4>\n" +
    "\t\t\t<h3> {{ bp.Date | date : \"d\" }} </h3>\n" +
    "<!-- \t\t\t\t\t<ul class=\"social-icons social-icons--vertical\">\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-facebook\"></span><span>15</span></a></li>\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-comment\"></span></span><span>4</span></a></li>\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-heart\"></span><span>10</span></a></li>\n" +
    "\t\t\t\t<li><a href=\"#\"><span class=\"icon fa-twitter\"></span><span>12</span></a></li>\n" +
    "\t\t\t</ul> -->\n" +
    "\t\t</div>\n" +
    "        <h1><a ui-sref=\"details({url : bp.Url})\">{{bp.Title}}</a></h1>\n" +
    "        <!-- <h3> A free fully responsive thing</h3> -->\n" +
    "        <div class=\"content\">\n" +
    "            <p>{{ bp.Summary }}</p>\n" +
    "        </div>\n" +
    "    </div> \n" +
    "</div>"
  );

}]);
