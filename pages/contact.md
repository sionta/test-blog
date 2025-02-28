---
layout: page
title: Contact
permalink: /contact/
---

## Get in touch

If you have any questions, suggestions, or just want to share your thoughts, I am here to listen. Feel free to contact me via this email [{{ site.social.email }}](<mailto:{{ site.social.email }}>){: target="_blank" rel="noopener noreferrer" }

### Links

{%- for item in site.social.links %}
- [{{ item }}](<{{ item | relative_url }}>){: rel="noopener noreferrer"}
{%- endfor %}
