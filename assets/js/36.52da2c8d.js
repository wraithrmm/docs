(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{422:function(e,n,t){"use strict";t.r(n);var i=t(18),s=Object(i.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Ja, nichts und niemand ist perfekt, aber wir geben unser bestes nahe dran zu sein. Aber um ehrlich zu sein, Alice wird größer und größer, da geht auch mal was schief. Oder verwendest du Hardware die wir einfach noch nie getestet haben? Vielleicht ist dir auch nur ein Flüchtigkeitsfehler unterlaufen? Es gibt viele Gründe warum es auf Anhieb mal nicht klappt. Lass uns einfach eine Lösung dafür finden!\nBedenke, der erste Start kann schon mal 15 Minuten dauern. Das hängt von Hardware und Einstellungen ab. Auf jeden Fall: "),t("strong",[e._v("Ziehe Alice jetzt nicht den Stecker")]),e._v(" wenn es so scheint als würde nichts passieren. Vielleicht erwischt du sonst Alice mitten in ihrem Training.")]),e._v(" "),t("p",[e._v("Als erstes solltest du mittels SSH auf dein Gerät zugreifen. Finde die IP von deinem Gerät heraus und verbinde dich mittels ssh. Unter Windows empfehlen wir "),t("a",{attrs:{href:"https://www.9bis.net/kitty/#!pages/download.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kitty"),t("OutboundLink")],1),e._v(", auf anderen Plattformen solltest du direkt per Terminal verbinden können.")]),e._v(" "),t("p",[e._v("Es gibt viele mögliche Wege nach dem Fehler zu suchen, das hier ist nur einer davon.")]),e._v(" "),t("p",[e._v("Als erstes, lass uns einen Blick auf den Project Alice service werfen:")]),e._v(" "),t("p",[t("code",[e._v("sudo systemctl status ProjectAlice")])]),e._v(" "),t("p",[e._v("Du solltest einige Informationen zum Service erhalten. Wenn du es eine Weile beobachtetst, solltest du feststellen, dass es entweder durchgängig läuft, dann musst du einfach weiter warten bis Alice fertig gestartet ist. Oder du siehst, dass der Service regelmäßig abstürzt und neu startet. Vielleicht wird dir der Service aber auch als Tot angezeigt.")]),e._v(" "),t("p",[e._v("Sollte der Service Tot sein oder dauernd neustarten, müssen wir tiefer graben. Stoppe Project Alice. Drücke dazu als erstes STRG+C um wieder Eingabebereit zu sein. Dann geb ein:")]),e._v(" "),t("p",[t("code",[e._v("sudo systemctl stop ProjectAlice")])]),e._v(" "),t("p",[e._v("Lass uns Alice jetzt manuell starten, dann haben wir einen besseren Einblick in die Logs. Schreibe dazu in deinem SSH terminal:")]),e._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/pi/ProjectAlice\n./venv/bin/python main.py\n")])])]),t("p",[e._v("Dadurch wird Alice manuell gestartet und sie gibt dir jede detaillierte Meldung aus. Wenn sie auf einen Fehler stößt, wird dir dieser ausgegeben und Alice stoppt. Suche nach so einem Fehler und erstelle damit ein Issue auf "),t("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAlice/issues/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),t("OutboundLink")],1),e._v(". Lies dir die Logs sorgfältig durch, wenn doch nur eine Einstellung fehlt, oder eine Abhängigkeit nicht installiert wurde, dann gibt es hierfür normalerweise eindeutige Meldungen!")]),e._v(" "),t("p",[e._v("Wenn es keinen Fehler gibt und es scheint so, als würde Alice ohne Probleme starten, dann sollte die letzte Zeile im Log folgende sein:")]),e._v(" "),t("p",[t("code",[e._v("Starting Alice Core")])]),e._v(" "),t("p",[e._v("Gleichzeitig solltest du dann auch ihre Willkommensnachricht hören!")]),e._v(" "),t("h4",{attrs:{id:"das-log-sagt-sie-fragt-nach-einem-neuen-nutzer-aber-ich-hore-nichts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#das-log-sagt-sie-fragt-nach-einem-neuen-nutzer-aber-ich-hore-nichts"}},[e._v("#")]),e._v(" Das Log sagt, sie fragt nach einem neuen Nutzer, aber ich höre nichts")]),e._v(" "),t("p",[e._v("Linux Audio Probleme, die sind ja leider bekannt? Stoppe Alice mit STRG+C und wirf einen Blick in deine installierten Audio Geräte:")]),e._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("aplay -l\narecord -l\n")])])]),t("p",[e._v("Hier sollteste du deine Geräte finden. Das erste Gerät ist dein standard Audio Ausgabegerät, das zweite deine Audio Eingabe. Ist deine Hardware hier nicht gelistet, hast du das  Problem identifiziert! Für eine genaue Lösung, ist die Hardware-Welt leider zu groß..")]),e._v(" "),t("p",[e._v("WIP")])])}),[],!1,null,null,null);n.default=s.exports}}]);