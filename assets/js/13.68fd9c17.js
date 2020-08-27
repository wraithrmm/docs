(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{393:function(e,t,a){"use strict";a.r(t);var o=a(42),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"satellite-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#satellite-setup"}},[e._v("#")]),e._v(" Satellite setup")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This is an alpha release! It is subject to major changes and the target audience is people with some knowledge of their devices, coding, installing python modules and basic stuff!")])]),e._v(" "),a("ul",[a("li",[e._v("Download our prefabricated Raspbian buster image:\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAliceSatellite/releases/tag/v1.0.0-a1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Direct download"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("This image has nothing more than Project Alice and its dependencies as well as Hermes Led Control")]),e._v(" "),a("li",[e._v("If you wonder what's check the "),a("a",{attrs:{href:"preinstalled"}},[e._v("Preinstalled Packages Section")])])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You need the AliceSatellite installed and running on your main unit!")])]),e._v(" "),a("ul",[a("li",[e._v("Flash the image to your SD card")]),e._v(" "),a("li",[a("strong",[e._v("do not place any wpa_supplicant.conf or ssh file in /boot")])]),e._v(" "),a("li",[a("strong",[e._v("do not boot your raspberry before doing this next point!!")])]),e._v(" "),a("li",[a("strong",[e._v("Edit the /boot/ProjectAliceSatellite.yaml file")]),e._v(". If there's no ProjectAliceSatellite.yaml file on the /boot partition, grab the latest from sources: "),a("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAliceSatellite/blob/master/ProjectAliceSatellite.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProjectAliceSatellite.yaml"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Configure it according to your information and needs. All configuration have a little explanation but most should be self explanatory.")]),e._v(" "),a("li",[e._v("Make sure to have a space after the colons:\n"),a("ul",[a("li",[e._v("Wrong: "),a("code",[e._v("forceRewrite:yes")])]),e._v(" "),a("li",[e._v("Correct: "),a("code",[e._v("forceRewrite: yes")])])])]),e._v(" "),a("li",[e._v("If the option value contains any special characters, enclose the whole with double quotes:\n"),a("ul",[a("li",[e._v("Wrong: "),a("code",[e._v("mqttPassword: a:%qJi")])]),e._v(" "),a("li",[e._v("Correct: "),a("code",[e._v('mqttPassword: "a:%qJi"')])])])]),e._v(" "),a("li",[e._v("Save it, unplug your sd, plug it in your raspberry pi.")]),e._v(" "),a("li",[e._v('Ask Alice to "Add a new satellite"')]),e._v(" "),a("li",[e._v("Power up your satellite")]),e._v(" "),a("li",[e._v("Alice should boot by herself and connect to your wifi, update, configure and start. This may take a while")]),e._v(" "),a("li",[e._v('If Alice times out for the satellite addition, after 5 minutes, she\'ll tell you. In that case ask her again to "Add a satellite". If you are using respeakers per exemple, the satellite setup might take more than 5 minutes.')]),e._v(" "),a("li",[e._v("The SSH User is "),a("code",[e._v("pi")]),e._v(" and the password is "),a("code",[e._v("umbrella")])])]),e._v(" "),a("p",[e._v("If everything goes fine, Alice will confirm the addition of the satellite and automatically configure it to connect to the correct Mqtt server. She will also automatically upload the hotword and wakeword resources to the new device.")]),e._v(" "),a("h4",{attrs:{id:"having-issues-with-alice-she-doesn-t-hear-you-doesn-t-seem-to-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#having-issues-with-alice-she-doesn-t-hear-you-doesn-t-seem-to-start"}},[e._v("#")]),e._v(" Having issues with Alice? She doesn't hear you? Doesn't seem to start?")]),e._v(" "),a("p",[e._v("Have a look at our "),a("a",{attrs:{href:"troubleshooting"}},[e._v("Troubleshooting guide")]),e._v("!")])])}),[],!1,null,null,null);t.default=i.exports}}]);