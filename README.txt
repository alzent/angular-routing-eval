Fehlende Module nachinstallieren
---
npm install


Run
---
ng serve
... und im Browser abrufen


Funktionsweise
---
Dieses Eval-Projekt verdeutlicht die Routing-Umsetzung in angular.


Keypoints
---

app-routing.module.ts enthält das Mapping zwischen URL-Path und der zuständigen Component.

The directive (<router-outlet>) marks where the router displays a view. D.h. die Component mit dem Selector 'app-root' erzeugt eine Ausgabe (Link-Leiste). Nach dieser Ausgabe wird die Ausgabe einer spezifischen Component (z.B. PepperoniComponent) integriert. 

























