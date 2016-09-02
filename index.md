---
title: macOS forge
layout: index
---

{:.lead}
macOS forge hosted [open source](https://opensource.org/) projects closely related to [macOS](http://www.apple.com/macos/). These projects have moved:

<div class="row macosforge-projects">
  {% for project in site.data.projects %}
  <a href="{{ project.url }}">
    <div class="col-md-4 col-sm-6">
      <h4>{{ project.name | escape }}</h4>
      <p>{{ project.description | escape }}</p>
    </div>
  </a>
  {% endfor %}
</div>

---

macOS includes a wide variety of open source software from [FreeBSD](http://www.freebsd.org/), [NetBSD](http://www.netbsd.org/), [OpenBSD](http://www.openbsd.org/), the [GNU Project](http://www.gnu.org/), and many more projects, each with its own vibrant developer community. Only select macOS projects were hosted at macOS forge. For the complete set of open source software found in macOS, visit [Apple Open Source](https://opensource.apple.com/).
