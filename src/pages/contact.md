---
layout: page
title: Contact
permalink: /contact/
---

{% assign CONTACT_EMAIL = site.email | default: site.author.email | default: site.social.email %}

## Get in touch

If you have any questions, suggestions, or just want to share your thoughts, I am here to listen. Feel free to contact me via this email [{{ CONTACT_EMAIL }}](<mailto:{{- CONTACT_EMAIL -}}>){: target="\_blank" rel="noopener noreferrer" }

### Links

{%- for item in site.social.links %}
- [{{ item }}](<{{ item | relative_url }}>){: rel="noopener noreferrer"}
{%- endfor %}
