## ep_padlist

A plugin for etherpad-lite to list all pads on a page.

The list is available at `/list`

### Installation

npm install https://github.com/esripdx/ep_padlist/tarball/master

One crucial issue is to ensure that the URL path to individual pads is correct. By default etherpad-lite has a URL template like http://localhost:9001/p/[padname] - depending on how you configure your webserver that proxies the node server, you may eliminate the /p/ to make the pads' URLs more "friendly", e.g. http(s)://[sitename]/[padname] - in that case, you will need to remove the /p/ from templates/pad.html, or otherwise alter it to suit your needs.

### License

Copyright 2013 Esri, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
