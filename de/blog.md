---
layout: default
title: Blog
lang: de
ref: blog
---
<ul id="bloglist">
	{% for post in site.posts %}
		<a href="{{ post.url }}">
			<li>
				<h6>{{ post.date | date_to_string }}</h6>
				<h3>{{ post.title }}</h3>
				{{ post.excerpt }}
			</li>
		</a>
	{% endfor %}
</ul>
