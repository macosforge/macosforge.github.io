---
title: "New Project: libdispatch"
slug: new-project-libdispatch
date: 2009-09-10 18:17:37.861295-07
---

The libdispatch project consists of the user space implementation of the Grand Central Dispatch API as seen in Mac OS X version 10.6 Snow Leopard. The Mac OS X kernel support for GCD may be found in the [xnu project](http://www.opensource.apple.com/source/xnu/xnu-1456.1.26/). While kernel support provides many performance optimizations on Mac OS X, it is not strictly required for portability to other platforms. However, in order to implement the full API for Grand Central Dispatch, [C compiler](http://clang.llvm.org/) support for blocks is required. The [blocks runtime](http://compiler-rt.llvm.org/) is available as part of the [LLVM project](http://llvm.org/).

This project is intended to be a resource for developers interested in learning more about libdispatch on Mac OS X. Contributions to this project will be continually evaluated for possible inclusion in future releases of Mac OS X. The sources are available under the terms of the [Apache License, Version 2.0](http://www.opensource.apple.com/license/apache/) in the hope that they might serve as a launching point for porting GCD to other platforms.

Learn more at <https://libdispatch.macosforge.org/>
