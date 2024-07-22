---
layout: default
title: portfolio
---
# Art Portfolio
<div class="portfolio">
    {% for image in site.static_files %}
      {% if image.path contains '/images/art_portfolio/' %}
        <div class="gallery-item">
        <img src="{{ image.path | relative_url }}" alt="Artwork">
        </div>
      {% endif %}
    {% endfor %}
  </div>