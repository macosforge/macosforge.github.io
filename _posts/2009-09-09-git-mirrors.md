---
title: Git Mirrors
slug: git-mirrors
date: 2009-09-09 17:56:54.670277-07
---

You can use [git](http://git-scm.com/) and [git-svn](http://www.kernel.org/pub/software/scm/git/docs/git-svn.html) to work with a project's source code now. These read-only git repositories are mirrored after each commit, so they should always be in sync. The [WebKit](https://webkit.org) project has [a wiki page](https://trac.webkit.org/wiki/UsingGitWithWebKit) which explains how to use git and svn and is a good example to follow. The URLs are of the form:

* git://git.macosforge.org/&lt;project&gt;.git

Some projects have specialized URLs:

### MacPorts

* git://git.macports.org/macports/trunk.git
* git://git.macports.org/macports/contrib.git
* git://git.macports.org/macports/users.git

### MacRuby

* git://git.macruby.org/macruby/MacRuby.git
* git://git.macruby.org/macruby/MacRubyWebsite.git

### CalendarServer

* git://git.calendarserver.org/calendarserver/CalDAVClientLibrary.git
* git://git.calendarserver.org/calendarserver/CalDAVTester.git
* git://git.calendarserver.org/calendarserver/CalendarClientSimulator.git
* git://git.calendarserver.org/calendarserver/CalendarServer.git
* git://git.calendarserver.org/calendarserver/PyAppleAuth.git
* git://git.calendarserver.org/calendarserver/PyKerberos.git
* git://git.calendarserver.org/calendarserver/PyOpenDirectory.git
