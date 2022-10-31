const e="\u539F\u795E\u7948\u613F\u6A21\u62DF\u5668",n="\u89D2\u8272",a="\u6B66\u5668",t="\u795E\u4E4B\u773C",s="\u98CE",r="\u51B0",o="\u8349",i="\u96F7",p="\u6C34",c="\u5CA9",l="\u706B",d="\u5F13",m="\u6CD5\u5668",u="\u53CC\u624B\u5251",g="\u5355\u624B\u5251",h="\u957F\u67C4\u6B66\u5668",f="\u989D\u5916\u83B7\u5F97",y="\u5DF2\u83B7\u5F97",b="\u8BF7\u7A0D\u7B49",P="\u786E\u8BA4",w="\u53D6\u6D88",v="\u672C\u7F51\u7AD9\u4F7F\u7528\u7684\u6240\u6709\u8D44\u6E90\u5747\u5F52\u7C73\u54C8\u6E38\u6240\u6709\u3002",U="\u8FD9\u662F\u4E00\u4E2A\u7C89\u4E1D\u5236\u4F5C\u7684\u5E94\u7528\uFF0C\u5C3D\u60C5\u4EAB\u53D7\u5427\uFF01",N="\u70B9\u51FB\u7A7A\u767D\u533A\u57DF\u7EE7\u7EED",x="\u5206\u4EAB",B="\u622A\u56FE",C="\u6B63\u5728\u622A\u56FE",F="\u9996\u6B21\u5206\u4EAB : {qty}",S="\u7248\u672C",W="\u6350\u8D60",T={rollButton:"\u7948\u613F{count}\u6B21",stellaFortuna:"\u5BF9\u5E94\u89D2\u8272\u7684\u547D\u661F",banner:{text:"\u5361\u6C60",allBanner:"\u5168\u90E8\u5361\u6C60",previous:"\u5F80\u671F\u5361\u6C60",findBanner:"\u641C\u7D22\u5361\u6C60",group:"\u5206\u7EC4",events:"\u89D2\u8272\u6D3B\u52A8\u7948\u613F",beginner:"\u521D\u884C\u8005\u63A8\u8350\u7948\u613F",weapons:"\u6B66\u5668\u6D3B\u52A8\u7948\u613F",standard:"\u5E38\u9A7B\u7948\u613F",wishDescription:"\u6BCF\u5341\u6B21\u7948\u613F\u5FC5\u51FA\u56DB\u661F\u6216\u4EE5\u4E0A\u7269\u54C1\u3002",novice:"\u65B0\u624B\u7948\u613F",up:"UP!",beginnerSet:"\u5341\u8FDE8\u6298\uFF0C\u9996\u6B21\u5FC5\u5F97{character}",beginnerNote:"\u300C\u6211\u4F1A\u6CE8\u610F\u5973\u4EC6\u7684\u793C\u4EEA\u3002\u300D",beginnerChance:"\u5269\u4F59\u6B21\u6570\uFF1A{chances}",standardNote:"\u5E38\u9A7B\u7948\u613F\uFF0C\u6C38\u4E45\u6027\u7948\u613F\u6D3B\u52A8\u3002",allWeaponTypes:"\u5168\u90E8\u7C7B\u578B",etc:"\u7B49",probIncreased:"\u83B7\u53D6\u6982\u7387\u63D0\u5347\uFF01",eventNote:"\u6D3B\u52A8\u9650\u5B9A\u4E94\u661F\u89D2\u8272\u4EC5\u5728UP\u671F\u95F4\uFF0C\u901A\u8FC7\u5BF9\u5E94\u7948\u613F\u83B7\u5F97\u3002",viewDetails:"\u5177\u4F53\u5185\u5BB9\u67E5\u770B\u3010\u8BE6\u60C5\u3011",name:{wanderlust:"\u5954\u884C\u4E16\u95F4","epitome-invocation":"\u795E\u94F8\u8D4B\u5F62","ballad-in-goblets":"\u676F\u88C5\u4E4B\u8BD7","sparkling-steps":"\u95EA\u7130\u7684\u9A7B\u8DB3","farewell-of-snezhnaya":"\u6682\u522B\u51AC\u90FD","gentry-of-hermitage":"\u9675\u85AE\u5E02\u671D","secretum-secretorum":"\u6DF1\u79D8\u4E4B\u606F","dance-of-lantern":"\u9C7C\u9F99\u706F\u663C","moment-of-bloom":"\u8D64\u56E2\u5F00\u65F6","invitation-to-mundane-life":"\u70DF\u706B\u4E4B\u9080","born-of-ocean-swell":"\u6D6A\u6D8C\u4E4B\u77AC","leaves-in-the-wind":"\u53F6\u843D\u98CE\u968F","the-heron_s-court":"\u767D\u9E6D\u4E4B\u5EAD","tapestry-of-golden-flames":"\u7130\u8272\u5929\u6CB3","reign-of-serenity":"\u5F71\u5BC2\u5929\u4E0B\u4EBA","oni_s-royale":"\u9B3C\u95E8\u6597\u5BB4","the-transcendent-one-returns":"\u51FA\u5C18\u5165\u4E16","everbloom-violet":"\u534E\u7D2B\u6A31\u7EEF","azure-excursion":"\u82CD\u6D41\u8E0F\u82B1","discerner-of-enigmas":"\u7D20\u9713\u4F23\u5929","adrift-in-the-harbor":"\u6D6E\u751F\u5B70\u6765","drifting-luminescence":"\u6D6E\u5CB3\u8679\u73E0","viridescent-vigil":"\u5DE1\u5FA1\u8619\u835F","twilight-arbiter":"\u96F3\u88C1\u51A5\u662D","twirling-lotus":"\u7FE9\u821E\u6B48\u83B2","the-moongrass-enlightenment":"\u6708\u8349\u7684\u8D50\u6167"}},epitomizedPath:{text:"\u795E\u94F8\u5B9A\u8F68",fatePoint:"\u547D\u5B9A\u503C",cancelPrompt:"\u662F\u5426\u786E\u8BA4\u53D6\u6D88\u5F53\u524D\u7684\u5B9A\u8F68\uFF1F",cancelDesc:"\u53D6\u6D88\u540E\uFF0C\u5DF2\u79EF\u7D2F\u7684\u547D\u5B9A\u503C\u5C06\u6E05\u7A7A\u3002",selectWeapon:"\u9009\u62E9\u5B9A\u8F68\u6B66\u5668",chartCourseOf:"\u4E3A{target}\u5B9A\u8F68",cancelCourse:"\u53D6\u6D88\u5B9A\u8F68",chartCourse:"\u5B9A\u8F68",courseSetFor:"\u5F53\u524D\u5B9A\u8F68: {selectedCourse}",description:["\u300C\u795E\u94F8\u5B9A\u8F68\u300D\u662F\u672C\u671F\u300C\u795E\u94F8\u8D4B\u5F62\u300D\u6240\u7279\u6709\u7684\u7948\u613F\u673A\u5236\uFF1A","\u5BF9\u671F\u671B\u76845\u661FUP\u6B66\u5668\u8FDB\u884C\u5B9A\u8F68\u540E\uFF0C\u5F53\u901A\u8FC7\u7948\u613F\u5728\u672C\u671F\u300C\u795E\u94F8\u8D4B\u5F62\u300D\u4E2D<span>\u83B7\u53D6\u975E\u5B9A\u8F68\u76845\u661F\u6B66\u5668\u65F6\uFF0C\u5C06\u83B7\u5F971\u70B9\u547D\u5B9A\u503C</span>\u3002","\u547D\u5B9A\u503C\u5145\u6EE1\u540E\uFF0C\u5728\u672C\u671F\u300C\u795E\u94F8\u8D4B\u5F62\u300D\u4E2D\u7948\u613F\u83B7\u5F97\u7684\u4E0B\u4E00\u4EF65\u661F\u6B66\u5668\u5C06\u4F1A\u662F\u901A\u8FC7\u300C\u795E\u94F8\u5B9A\u8F68\u300D\u9009\u5B9A\u7684\u6B66\u5668\u3002","\u5728\u672C\u671F\u300C\u795E\u94F8\u8D4B\u5F62\u300D\u4E2D\u7948\u613F<span>\u83B7\u5F97\u300C\u795E\u94F8\u5B9A\u8F68\u300D\u7684\u6B66\u5668\u65F6\uFF0C\u5DF2\u79EF\u7D2F\u7684\u547D\u5B9A\u503C\u5C06\u4F1A\u6E05\u9664</span>\u3002","\u672A\u901A\u8FC7\u300C\u795E\u94F8\u5B9A\u8F68\u300D\u5B9A\u8F68\u6B66\u5668\u65F6\uFF0C\u7948\u613F\u5C06\u4E0D\u4F1A\u7D2F\u79EF\u547D\u5B9A\u503C\u3002","\u6B66\u5668\u7684\u5B9A\u8F68\u72B6\u6001\u53EF\u4EE5\u8FDB\u884C\u66F4\u6362\uFF0C\u4E5F\u53EF\u4EE5\u53D6\u6D88\u5B9A\u8F68\u3002<span>\u66F4\u6362\u6216\u53D6\u6D88\u65F6\uFF0C\u4F1A\u6E05\u9664\u5DF2\u79EF\u7D2F\u7684\u547D\u5B9A\u503C</span>\u3002","<span>\u672C\u671F\u300C\u795E\u94F8\u8D4B\u5F62\u300D\u7ED3\u675F\u65F6\uFF0C\u5DF2\u79EF\u7D2F\u7684\u547D\u5B9A\u503C\u4E5F\u5C06\u6E05\u9664</span>\u3002"]},result:{skip:"\u8DF3\u8FC7",meteorFailed:"\u7948\u613F\u52A8\u753B\u52A0\u8F7D\u5931\u8D25",new:"\u65B0",convertion:"\u8F6C\u5316",title:"{item} \u7948\u613F\u7ED3\u679C"}},D={heading:"\u89D2\u8272\u88C5\u626E",setOutfit:"\u8BBE\u7F6E\u88C5\u626E",owned:"\u5DF2\u62E5\u6709",purchasePrompt:"\u60A8\u8FD8\u6CA1\u6709\u6B64\u88C5\u626E\u5BF9\u5E94\u7684\u89D2\u8272\uFF0C\u60A8\u786E\u5B9A\u8981\u8D2D\u4E70\u6B64\u88C5\u626E\u5417\uFF1F",promptInfo:"\u83B7\u5F97\u76F8\u5E94\u7684\u89D2\u8272\u540E\uFF0C\u60A8\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528\u6B64\u88C5\u626E",item:{"sea-breeze-dandelion":{name:"\u6D77\u98CE\u4E4B\u68A6",description:"\u7434\u7684\u590F\u65E5\u88C5\u675F\u3002\u6E05\u51C9\u800C\u4E0D\u5931\u4F18\u96C5\uFF0C\u662F\u6D77\u6EE8\u4E4B\u6E38\u7684\u7EDD\u4F73\u642D\u914D\u3002"},"summertime-sparkle":{name:"\u95EA\u8000\u534F\u594F",description:"\u82AD\u82AD\u62C9\u7684\u6D77\u6EE9\u88C5\u626E\u3002\u6D0B\u6EA2\u7740\u590F\u65E5\u6D3B\u529B\u7684\u4FCF\u4E3D\u77ED\u88D9\uFF0C\u4F3C\u4E4E\u6563\u53D1\u7740\u6D77\u6D0B\u7684\u6E05\u723D\u6C14\u606F\u3002"},"opulent-splendor":{name:"\u9713\u88FE\u8E41\u8DF9",description:"\u523B\u6674\u7684\u793C\u670D\u88C5\u626E\u3002\u4E8E\u6D77\u706F\u8282\u4E4B\u826F\u8FB0\u7F8E\u666F\u4E2D\uFF0C\u5F80\u65E5\u8F9B\u52B3\u6D53\u58A8\u6240\u7ED8\u7684\u7EBF\u6761\uFF0C\u4EA4\u7EC7\u6210\u4ECA\u591C\u8F7B\u76C8\u800C\u7470\u4E3D\u7684\u5BB9\u59FF\u3002"},"orchid_s-evening-gown":{name:"\u7EB1\u4E2D\u5E7D\u5170",description:"\u51DD\u5149\u7684\u793C\u670D\u88C5\u626E\u3002\u7EC0\u84DD\u957F\u88D9\u52FE\u52D2\u51FA\u4E3D\u4EBA\u4F18\u96C5\u7684\u66F2\u7EBF\uFF0C\u811A\u8E1D\u4E0A\u7684\u8776\u7FFC\u53C8\u4E3A\u5979\u5E73\u6DFB\u4E86\u51E0\u5206\u8F7B\u76C8\u3002"},"ein-immernachtstraum":{name:"\u6781\u591C\u7EC8\u68A6",description:"\u7687\u5973\u83F2\u8C22\u5C14\u7684\u796D\u793C\u7740\u88C5\u3002\u613F\u9AD8\u8D35\u7684\u4EBA\u6C38\u8FDC\u8446\u6709\u52C7\u6C14\u3001\u8BDA\u631A\u4E0E\u5584\u5FC3\uFF0C\u5982\u6B64\uFF0C\u90AA\u6076\u5FC5\u65E0\u6CD5\u632B\u8D25\u5979\u3002"},"red-dead-of-night":{name:"\u6BB7\u7EA2\u7EC8\u591C",description:"\u8FEA\u5362\u514B\u9690\u79D8\u884C\u52A8\u65F6\u6240\u7A7F\u7684\u8863\u88C5\u4E4B\u4E00\uFF0C\u5982\u9634\u5F71\u4E4B\u4E2D\u7FFB\u817E\u7684\u706B\u7130\u3002\u654C\u4EBA\u89C6\u91CE\u5C3D\u5934\u6240\u7559\u4E0B\u7684\u6BB7\u7EA2\u6B8B\u75D5\uFF0C\u5373\u662F\u4ED6\u4EEC\u4F59\u751F\u6325\u4E4B\u4E0D\u53BB\u7684\u68A6\u9B47\u3002"}}},O={text:"\u8BE6\u60C5",increasedRate:"\u4EE5\u4E0B\u5185\u5BB9\u51FA\u73B0[\u6982\u7387UP!!!]",percentageDrop:"\u5360{rarity}\u661F\u51FA\u7387\u7684: {percentage}",wishDetails:"\u7948\u613F\u8BE6\u60C5",probInfo:"{rarity}\u661F\u7269\u54C1\u57FA\u7840\u51FA\u7387\uFF1A{singlePercentage} (\u542B\u4FDD\u5E95\u7EFC\u5408\u51FA\u7387\uFF1A{avgPercentage})",itemWishFor:"\u4EE5\u4E0B\u4E3A\u7948\u613F\u7269\u54C1\u6E05\u5355\uFF1A",itemType:"\u7C7B\u578B",itemName:"\u540D\u79F0",beginnerInfo:"\u65E0\u65F6\u95F4\u4E0A\u9650 (\u62BD\u53D620\u6B21\u540E\u5173\u95ED)",limited:"\u9650\u65F6\u6D3B\u52A8",permanent:"\u6C38\u4E45",alert:"\u203B \u672C\u7948\u613F\u5C5E\u4E8E\u300C{wishName}\u300D\uFF0C\u5176\u7948\u613F\u6B21\u6570\u4FDD\u5E95\u4F1A\u4E00\u76F4\u7D2F\u8BA1\u5728\u300C{wishName}\u300D\u4E2D\uFF0C\u4E0E\u5176\u4ED6\u7948\u613F\u7684\u7948\u613F\u6B21\u6570\u4FDD\u5E95\u76F8\u4E92\u72EC\u7ACB\u8BA1\u7B97\uFF0C\u4E92\u4E0D\u5F71\u54CD\u3002",beginner:["\u521D\u884C\u8005\u63A8\u8350\u7948\u613F\u4E3A<span>\u6C38\u4E45</span>\u6027\u7948\u613F\u6D3B\u52A8\uFF0C\u662F\u9762\u5411\u65B0\u52A0\u5165\u63D0\u74E6\u7279\u5927\u9646\u7684\u65C5\u884C\u8005\u7684\u63A8\u8350\u7948\u613F\u3002\u5728\u672C\u7948\u613F\u5185\uFF0C\u5341\u8FDE\u6240\u6D88\u8017\u7684\u76F8\u9047\u4E4B\u7F18\u6570\u91CF\u53EF\u4EAB\u53D78\u6298\u4F18\u60E0\uFF0C\u4E14\u9996\u6B21\u5341\u8FDE\u5FC5\u4F1A\u83B7\u53D6\u300C{character}\u300D\uFF0C\u7B2C\u4E8C\u6B21\u5341\u8FDE\u5FC5\u4F1A\u83B7\u53D64\u661F\u6216\u4EE5\u4E0A\u7684\u89D2\u8272\uFF01\u672C\u7948\u613F\u5B58\u5728\u7948\u613F\u6B21\u6570\u4E0A\u9650\uFF0C\u6700\u9AD8\u4E3A<span>20</span>\u6B21\uFF0C\u62BD\u53D620\u6B21\u540E<span>\u672C\u6D3B\u52A8\u7948\u613F\u754C\u9762\u5C06\u5173\u95ED</span>\u3002","\u3013\u7948\u613F\u89C4\u5219\u3013","5\u661F\u7269\u54C1\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>0.600%</span>\uFF0C5\u661F\u89D2\u8272\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>0.300%</span>\uFF0C5\u661F\u6B66\u5668\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>0.300%</span>\uFF0C5\u661F\u7269\u54C1\u7948\u613F\u7EFC\u5408\u6982\u7387\uFF08\u542B\u4FDD\u5E95\uFF09\u4E3A<span>1.600%</span>\uFF0C\u6700\u591A<span>90</span>\u6B21\u7948\u613F\u5FC5\u5B9A\u80FD\u901A\u8FC7\u4FDD\u5E95\u83B7\u53D65\u661F\u7269\u54C1\u3002<br> 4\u661F\u7269\u54C1\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>5.100%</span>\uFF0C4\u661F\u89D2\u8272\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>2.550%</span>\uFF0C4\u661F\u6B66\u5668\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>2.550%</span>\uFF0C4\u661F\u7269\u54C1\u7948\u613F\u7684\u7EFC\u5408\u6982\u7387\uFF08\u542B\u4FDD\u5E95\uFF09\u4E3A<span>13.000%</span>\u3002\u6700\u591A<span>10</span>\u6B21\u7948\u613F\u5FC5\u5B9A\u80FD\u901A\u8FC7\u4FDD\u5E95\u83B7\u53D64\u661F\u6216\u4EE5\u4E0A\u7269\u54C1\uFF0C\u901A\u8FC7\u4FDD\u5E95\u83B7\u53D64\u661F\u7269\u54C1\u7684\u6982\u7387\u4E3A<span>99.400%</span>\uFF0C\u83B7\u53D65\u661F\u7269\u54C1\u7684\u6982\u7387\u4E3A<span>0.600%</span>\u3002"],standard:['\u300C\u5954\u884C<span class="std">\u4E16\u95F4</span>\u300D\u5E38\u9A7B\u7948\u613F\u4E3A\u6C38\u4E45\u6027\u7948\u613F\u6D3B\u52A8\uFF0C\u73A9\u5BB6\u53EF\u4EE5\u62BD\u53D6\u975E\u9650\u5B9A\u89D2\u8272\u4E0E\u6B66\u5668\u3002<br/>\u5728\u672C\u7948\u613F\u5185\uFF0C\u6BCF10\u6B21\u7948\u613F<span>\u5FC5\u4F1A</span>\u83B7\u5F97\u81F3\u5C111\u4E2A4\u661F\u6216\u4EE5\u4E0A\u7269\u54C1\u3002',"\u203B\u4E00\u822C\u60C5\u51B5\u4E0B\u6240\u6709\u89D2\u8272\u6216\u6B66\u5668\u5747\u9002\u7528\u57FA\u7840\u6982\u7387\uFF0C\u5982\u89E6\u53D1\u6982\u7387UP\u3001\u4FDD\u5E95\u7B49\u4EE5\u5177\u4F53\u89C4\u5219\u4E3A\u51C6\u3002","\u3013\u7948\u613F\u89C4\u5219\u3013","5\u661F\u7269\u54C1\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>0.600%</span>\uFF0C5\u661F\u89D2\u8272\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>0.300%</span>\uFF0C5\u661F\u6B66\u5668\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>0.300%</span>\uFF0C5\u661F\u7269\u54C1\u7948\u613F\u7EFC\u5408\u6982\u7387\uFF08\u542B\u4FDD\u5E95\uFF09\u4E3A<span>1.600%</span>\uFF0C\u6700\u591A<span>90</span>\u6B21\u7948\u613F\u5FC5\u5B9A\u80FD\u901A\u8FC7\u4FDD\u5E95\u83B7\u53D65\u661F\u7269\u54C1\u3002<br> 4\u661F\u7269\u54C1\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>5.100%</span>\uFF0C4\u661F\u89D2\u8272\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>2.550%</span>\uFF0C4\u661F\u6B66\u5668\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>2.550%</span>\uFF0C4\u661F\u7269\u54C1\u7948\u613F\u7684\u7EFC\u5408\u6982\u7387\uFF08\u542B\u4FDD\u5E95\uFF09\u4E3A<span>13.000%</span>\u3002\u6700\u591A<span>10</span>\u6B21\u7948\u613F\u5FC5\u5B9A\u80FD\u901A\u8FC7\u4FDD\u5E95\u83B7\u53D64\u661F\u6216\u4EE5\u4E0A\u7269\u54C1\uFF0C\u901A\u8FC7\u4FDD\u5E95\u83B7\u53D64\u661F\u7269\u54C1\u7684\u6982\u7387\u4E3A<span>99.400%</span>\uFF0C\u83B7\u53D65\u661F\u7269\u54C1\u7684\u6982\u7387\u4E3A<span>0.600%</span>\u3002"],events:["\u300C{bannerName}\u300D\u6D3B\u52A8\u7948\u613F\u5DF2\u5F00\u542F\u3002\u6D3B\u52A8\u671F\u95F4\u5185\uFF0C\u9650\u5B9A5\u661F\u89D2\u8272\u300C{featuredCharacter} \u300D\u4EE5\u53CA4\u661F\u89D2\u8272 {rateupCharacters} \u7684\u7948\u613F\u83B7\u53D6\u6982\u7387\u5C06<span>\u5927\u5E45\u63D0\u5347</span>\uFF01 <span> \u203B\u4EE5\u4E0A\u89D2\u8272\u4E2D\uFF0C\u9650\u5B9A\u89D2\u8272\u4E0D\u4F1A\u8FDB\u5165\u300C\u5954\u884C\u4E16\u95F4\u300D\u5E38\u9A7B\u7948\u613F\u3002 </span>","\u203B \u4E00\u822C\u60C5\u51B5\u4E0B\u6240\u6709\u89D2\u8272\u6216\u6B66\u5668\u5747\u9002\u7528\u57FA\u7840\u6982\u7387\uFF0C\u5982\u89E6\u53D1\u6982\u7387UP\u3001\u4FDD\u5E95\u7B49\u4EE5\u5177\u4F53\u89C4\u5219\u4E3A\u51C6\u3002","\u3013\u7948\u613F\u89C4\u5219\u3013","\u30105\u661F\u7269\u54C1\u3011","\u5728\u672C\u671F\u300C{bannerName}\u300D\u6D3B\u52A8\u7948\u613F\u4E2D\uFF0C5\u661F\u89D2\u8272\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>0.600%</span>\uFF0C\u7EFC\u5408\u6982\u7387\uFF08\u542B\u4FDD\u5E95\uFF09\u4E3A<span>1.600%</span>\uFF0C\u6700\u591A<span>90</span>\u6B21\u7948\u613F\u5FC5\u5B9A\u80FD\u901A\u8FC7\u4FDD\u5E95\u83B7\u53D65\u661F\u89D2\u8272\u3002\u5F53\u7948\u613F\u83B7\u53D6\u52305\u661F\u89D2\u8272\u65F6\uFF0C\u6709<span>50.000%</span>\u7684\u6982\u7387\u4E3A\u672C\u671F5\u661FUP\u89D2\u8272\u300C{featuredCharacter}\u300D\u3002\u5982\u679C\u672C\u6B21\u7948\u613F\u83B7\u53D6\u76845\u661F\u89D2\u8272\u975E\u672C\u671F5\u661FUP\u89D2\u8272\uFF0C\u4E0B\u6B21\u7948\u613F\u83B7\u53D6\u76845\u661F\u89D2\u8272<span>\u5FC5\u5B9A</span>\u4E3A\u672C\u671F5\u661FUP\u89D2\u8272\u3002","\u30104\u661F\u7269\u54C1\u3011","\u5728\u672C\u671F\u300C\u53F6\u843D\u98CE\u968F\u300D\u6D3B\u52A8\u7948\u613F\u4E2D\uFF0C4\u661F\u7269\u54C1\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>5.100%</span>\uFF0C4\u661F\u89D2\u8272\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>2.550%</span>\uFF0C4\u661F\u6B66\u5668\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>2.550%</span>\uFF0C4\u661F\u7269\u54C1\u7948\u613F\u7684\u7EFC\u5408\u6982\u7387\uFF08\u542B\u4FDD\u5E95\uFF09\u4E3A<span>13.000%</span>\u3002\u6700\u591A<span>10</span>\u6B21\u7948\u613F\u5FC5\u5B9A\u80FD\u901A\u8FC7\u4FDD\u5E95\u83B7\u53D64\u661F\u6216\u4EE5\u4E0A\u7269\u54C1\uFF0C\u901A\u8FC7\u4FDD\u5E95\u83B7\u53D64\u661F\u7269\u54C1\u7684\u6982\u7387\u4E3A<span>99.400%</span>\uFF0C\u83B7\u53D65\u661F\u7269\u54C1\u7684\u6982\u7387\u4E3A<span>0.600%</span>\u3002\u5F53\u7948\u613F\u83B7\u53D6\u52304\u661F\u7269\u54C1\u65F6\uFF0C\u6709<span>50.000%</span>\u7684\u6982\u7387\u4E3A\u672C\u671F4\u661FUP\u89D2\u8272{rateupCharacters}\u4E2D\u7684\u4E00\u4E2A\u3002\u5982\u679C\u672C\u6B21\u7948\u613F\u83B7\u53D6\u76844\u661F\u7269\u54C1\u975E\u672C\u671F4\u661FUP\u89D2\u8272\uFF0C\u4E0B\u6B21\u7948\u613F\u83B7\u53D6\u76844\u661F\u7269\u54C1<span>\u5FC5\u5B9A</span>\u4E3A\u672C\u671F4\u661FUP\u89D2\u8272\u3002\u5F53\u7948\u613F\u83B7\u53D6\u52304\u661FUP\u7269\u54C1\u65F6\uFF0C\u6BCF\u4E2A\u672C\u671F4\u661FUP\u89D2\u8272\u7684\u83B7\u53D6\u6982\u7387\u5747\u7B49\u3002"],weapons:["\u300C{bannerName}\u300D\u6D3B\u52A8\u7948\u613F\u73B0\u5DF2\u5F00\u542F\u3002\u6D3B\u52A8\u671F\u95F4\u5185\uFF0C\u9650\u5B9A5\u661F\u6B66\u5668{featuredWeapon1}\u30015\u661F\u6B66\u5668{featuredWeapon2}\u4EE5\u53CA4\u661F\u6B66\u5668{rateupWeapons}\u7684\u7948\u613F\u83B7\u53D6\u6982\u7387\u5C06<span>\u5927\u5E45\u63D0\u5347</span>\uFF01<br/> <span> \u203B\u4EE5\u4E0A\u6B66\u5668\u4E2D\uFF0C\u9650\u5B9A\u6B66\u5668\u4E0D\u4F1A\u8FDB\u5165\u300C\u5954\u884C\u4E16\u95F4\u300D\u5E38\u9A7B\u7948\u613F\u3002</span>","\u203B\u4E00\u822C\u60C5\u51B5\u4E0B\u6240\u6709\u89D2\u8272\u6216\u6B66\u5668\u5747\u9002\u7528\u57FA\u7840\u6982\u7387\uFF0C\u5982\u89E6\u53D1\u6982\u7387UP\u3001\u4FDD\u5E95\u7B49\u4EE5\u5177\u4F53\u89C4\u5219\u4E3A\u51C6\u3002","\u3013\u7948\u613F\u89C4\u5219\u3013","\u30105\u661F\u7269\u54C1\u3011","\u5728\u672C\u671F\u300C{bannerName}\u300D\u6D3B\u52A8\u7948\u613F\u4E2D\uFF0C5\u661F\u6B66\u5668\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>0.700%</span>\uFF0C\u7EFC\u5408\u6982\u7387\uFF08\u542B\u4FDD\u5E95\uFF09\u4E3A<span>1.850%</span>\uFF0C\u6700\u591A<span>80</span>\u6B21\u7948\u613F\u5FC5\u5B9A\u80FD\u901A\u8FC7\u4FDD\u5E95\u83B7\u53D65\u661F\u89D2\u8272\u3002\u5F53\u7948\u613F\u83B7\u53D6\u52305\u661F\u89D2\u8272\u65F6\uFF0C\u6709<span>75.000%</span>\u7684\u6982\u7387\u4E3A\u672C\u671F5\u661FUP\u6B66\u5668\u300C{featuredWeapon1}\u300D\u3001\u300C{featuredWeapon2}\u300D\u3002\u5982\u679C\u672C\u6B21\u7948\u613F\u83B7\u53D6\u76845\u661F\u89D2\u8272\u975E\u672C\u671F5\u661FUP\u6B66\u5668\uFF0C\u4E0B\u6B21\u7948\u613F\u83B7\u53D6\u76845\u661F\u6B66\u5668<span>\u5FC5\u5B9A</span>\u4E3A\u672C\u671F5\u661FUP\u6B66\u5668\u3002<br/>\u5728\u672A\u901A\u8FC7\u547D\u5B9A\u503C\u8FBE\u5230\u6EE1\u503C\u83B7\u53D6\u5B9A\u8F68\u6B66\u5668\u7684\u60C5\u51B5\u4E0B\uFF0C\u5F53\u7948\u613F\u83B7\u53D6\u52305\u661FUP\u7269\u54C1\u65F6\uFF0C\u6BCF\u628A\u672C\u671F5\u661FUP\u6B66\u5668\u7684\u83B7\u53D6\u6982\u7387\u5747\u7B49\u3002<br/>\u5728\u672C\u671F\u300C{bannerName}\u300D\u6D3B\u52A8\u7948\u613F\u4E2D\uFF0C\u53EF\u4F7F\u7528\u300C\u795E\u94F8\u5B9A\u8F68\u300D\u5BF9\u672C\u671F5\u661FUP\u6B66\u5668\u8FDB\u884C\u5B9A\u8F68\uFF0C\u5B9A\u8F68\u6B66\u5668\u7684\u9009\u62E9\u4EC5\u5728\u672C\u671F\u300C{bannerName}\u300D\u6D3B\u52A8\u7948\u613F\u4E2D\u751F\u6548\u3002<br/>\u5728\u672C\u671F\u300C{bannerName}\u300D\u6D3B\u52A8\u7948\u613F\u4E2D\uFF0C\u4F7F\u7528\u300C\u795E\u94F8\u5B9A\u8F68\u300D\u5B9A\u8F68\u6B66\u5668\u540E\uFF0C\u5F53\u83B7\u53D6\u5230\u76845\u661F\u6B66\u5668\u4E3A\u975E\u5F53\u524D\u5B9A\u8F68\u6B66\u5668\u65F6\uFF0C\u83B7\u5F971\u70B9\u547D\u5B9A\u503C\uFF0C\u547D\u5B9A\u503C\u8FBE\u5230<span>\u6EE1\u503C</span>\u540E\uFF0C\u5728\u672C\u7948\u613F\u4E2D\u83B7\u5F97\u7684\u4E0B\u4E00\u628A5\u661F\u6B66\u5668<span>\u5FC5\u5B9A</span>\u4E3A\u5F53\u524D\u5B9A\u8F68\u6B66\u5668\u3002\u83B7\u53D6\u5230\u5F53\u524D\u5B9A\u8F68\u6B66\u5668\u65F6\uFF0C\u65E0\u8BBA\u5F53\u524D\u547D\u5B9A\u503C\u662F\u5426\u8FBE\u5230\u6EE1\u503C\uFF0C\u90FD\u5C06\u4F1A\u91CD\u7F6E\u4E3A<span>0</span>\uFF0C\u91CD\u65B0\u7D2F\u8BA1\u3002<br/>\u672A\u4F7F\u7528\u300C\u795E\u94F8\u5B9A\u8F68\u300D\u5B9A\u8F68\u6B66\u5668\u65F6\uFF0C\u5C06<span>\u4E0D\u4F1A</span>\u7D2F\u79EF\u547D\u5B9A\u503C\u3002<br/>\u5B9A\u8F68\u6B66\u5668\u53EF\u8FDB\u884C\u66F4\u6362\u6216\u53D6\u6D88\u3002\u66F4\u6362\u6216\u53D6\u6D88\u5F53\u524D\u5B9A\u8F68\u6B66\u5668\u65F6\uFF0C\u547D\u5B9A\u503C\u5C06\u4F1A\u91CD\u7F6E\u4E3A<span>0</span>\uFF0C\u91CD\u65B0\u7D2F\u8BA1\u3002<br/>\u203B\u672C\u7948\u613F\u4E2D\u7684\u547D\u5B9A\u503C\u4EC5\u5728\u672C\u671F\u300C{bannerName}\u300D\u6D3B\u52A8\u7948\u613F\u4E2D\u751F\u6548\uFF0C\u7948\u613F\u7ED3\u675F\u540E\u547D\u5B9A\u503C\u5C06\u4F1A\u91CD\u7F6E\u4E3A<span>0</span>\uFF0C\u91CD\u65B0\u7D2F\u8BA1\u3002","\u30104\u661F\u7269\u54C1\u3011","\u5728\u672C\u671F\u300C{bannerName}\u300D\u6D3B\u52A8\u7948\u613F\u4E2D\uFF0C4\u661F\u7269\u54C1\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>6.000%</span>\uFF0C4\u661F\u89D2\u8272\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>3.000%</span>\uFF0C4\u661F\u6B66\u5668\u7948\u613F\u7684\u57FA\u7840\u6982\u7387\u4E3A<span>3.000%</span>\uFF0C4\u661F\u7269\u54C1\u7948\u613F\u7684\u7EFC\u5408\u6982\u7387\uFF08\u542B\u4FDD\u5E95\uFF09\u4E3A<span>14.500%</span>\u3002\u6700\u591A10\u6B21\u7948\u613F\u5FC5\u5B9A\u80FD\u901A\u8FC7\u4FDD\u5E95\u83B7\u53D64\u661F\u6216\u4EE5\u4E0A\u7269\u54C1\uFF0C\u901A\u8FC7\u4FDD\u5E95\u83B7\u53D64\u661F\u7269\u54C1\u7684\u6982\u7387\u4E3A99.300%\uFF0C\u83B7\u53D65\u661F\u7269\u54C1\u7684\u6982\u7387\u4E3A0.700%\u3002 <br/> \u5F53\u7948\u613F\u83B7\u53D6\u52304\u661F\u7269\u54C1\u65F6\uFF0C\u6709<span>75.000%</span>\u7684\u6982\u7387\u4E3A\u672C\u671F4\u661FUP\u6B66\u5668{rateupWeapons}\u4E2D\u7684\u4E00\u4E2A\u3002\u5982\u679C\u672C\u6B21\u7948\u613F\u83B7\u53D6\u76844\u661F\u7269\u54C1\u975E\u672C\u671F4\u661FUP\u6B66\u5668\uFF0C\u4E0B\u6B21\u7948\u613F\u83B7\u53D6\u76844\u661F\u7269\u54C1<span>\u5FC5\u5B9A</span>\u4E3A\u672C\u671F4\u661FUP\u6B66\u5668\u3002\u5F53\u7948\u613F\u83B7\u53D6\u52304\u661FUP\u7269\u54C1\u65F6\uFF0C\u6BCF\u628A\u672C\u671F4\u661FUP\u6B66\u5668\u7684\u83B7\u53D6\u6982\u7387\u5747\u7B49\u3002"],convertion:{fiveStar:"\u7948\u613F\u83B7\u5F975\u661F\u6B66\u5668\u65F6\uFF0C\u4F1A\u540C\u65F6\u83B7\u5F9710\u4E2A{starglitter}\u4F5C\u4E3A\u526F\u4EA7\u7269\uFF1B",fourStar:"\u83B7\u5F974\u661F\u6B66\u5668\u65F6\uFF0C\u4F1A\u540C\u65F6\u83B7\u5F972\u4E2A{starglitter}\u4F5C\u4E3A\u526F\u4EA7\u7269\uFF1B",threeStar:"\u83B7\u5F973\u661F\u6B66\u5668\u65F6\uFF0C\u4F1A\u540C\u65F6\u83B7\u5F9715\u4E2A{stardust}\u4F5C\u4E3A\u526F\u4EA7\u7269\u3002"},duplicate:{heading:"\u3013\u82E5\u83B7\u5F97\u91CD\u590D\u89D2\u8272\u3013",text:"\u65E0\u8BBA\u901A\u8FC7\u4F55\u79CD\u65B9\u5F0F\uFF08\u5305\u542B\u4F46\u4E0D\u9650\u4E8E\u7948\u613F\u3001\u5546\u57CE\u5151\u6362\u3001\u7CFB\u7EDF\u8D60\u9001\u7B49\uFF09\u7B2C2~7\u6B21\u83B7\u5F97\u76F8\u540C5\u661F\u89D2\u8272\u65F6\uFF0C\u6BCF\u6B21\u5C06\u8F6C\u5316\u4E3A1\u4E2A{stellaFortuna}\u548C10\u4E2A{starglitter}\uFF1B\u7B2C8\u6B21\u53CA\u4E4B\u540E\u83B7\u5F97\uFF0C\u5C06\u4EC5\u8F6C\u5316\u4E3A25\u4E2A{starglitter}\u3002"}},k={text:"\u5386\u53F2\u8BB0\u5F55",resetButton:"\u91CD\u7F6E",resetPromptTitle:"\u91CD\u7F6E\u8BB0\u5F55\uFF1F",resetPrompt:"\u5B83\u8FD8\u4F1A\u4ECE\u60A8\u7684\u5E93\u5B58\u4E2D\u5220\u9664\u4E0E {bannerName} \u5361\u6C60\u76F8\u5173\u7684\u6240\u6709\u89D2\u8272\u548C\u6B66\u5668\u3002 <br /> \u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u5417\uFF1F",resetSuccess:"\u5DF2\u6210\u529F\u91CD\u7F6E\uFF01",selectWish:"\u7948\u613F\u7C7B\u578B\u9009\u62E9:",disclaimer:"\u6211\u4EEC\u4ECE\u4E0D\u5C06\u60A8\u7684\u6570\u636E\u4FDD\u5B58\u5728\u4E91\u5B58\u50A8\u4E2D\u3002 \u6240\u6709\u6570\u636E\u90FD\u5B58\u50A8\u5230 IndexedDB\uFF0C\u8FD9\u610F\u5473\u7740\u6570\u636E\u4FDD\u5B58\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u5B58\u50A8\u4E2D\u3002 \u9664\u975E\u60A8\u901A\u8FC7\u5220\u9664/\u91CD\u7F6E\u6309\u94AE\u624B\u52A8\u5220\u9664\u5B83\u6216\u6E05\u9664\u6D4F\u89C8\u5668\u6570\u636E\uFF0C\u5426\u5219\u5B83\u6C38\u8FDC\u4E0D\u4F1A\u5220\u9664\u3002",currentPity:"\u5F53\u524D\u5DF2\u57AB:",totalPull:"\u603B\u5171\u62BD\u53D6:",totalSpend:"\u5DF2\u82B1\u8D39:",filterTxt:"Filter",filter:"{rarity} \u661F",filterAll:"\u5168\u90E8",pity:"\u5DF2\u57AB",timeReceived:"\u7948\u613F\u65F6\u95F4",waiting:"\u8BF7\u7A0D\u7B49",noData:"\u65E0\u53EF\u7528\u6570\u636E",untracked:"\u672A\u8FFD\u8E2A"},q={text:"\u5546\u57CE",paimonBargains:"\u5C18\u8F89\u5151\u6362",infsufficientFunds:"\u8D27\u5E01\u4E0D\u8DB3",fateNeeded:"\u7F3A\u5C11{rollQty}\u4E2A{currency}\uFF0C",primoNeeded:"\u662F\u5426\u6D88\u8017{primoPrice}\u539F\u77F3\u8D2D\u4E70\uFF1F",purchaseUpto:"\u9650\u8D2D 1",purchaseConfirm:"\u786E\u8BA4\u8D2D\u4E70",exchangeHeading:"\u5151\u6362\u7269\u54C1",purchaseHeading:"\u8D2D\u4E70\u7269\u54C1",purchaseButton:"\u8D2D\u4E70",pay:"\u652F\u4ED8",product:"\u4EA7\u54C1",consume:"\u88C5\u626E",selectPayment:"\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F",unrealWallet:"\u84DD\u7EFF\u4FEE\u6539\u5668\u7834\u89E3\u7248",convertPrimo:"\u81EA\u52A8\u8F6C\u6362\u4E3A\u539F\u77F3\uFF1F",proceedPayment:"\u786E\u8BA4\u4EA4\u6613",qty:"\u6570\u91CF",insufficient:"\u8D27\u5E01\u4E0D\u8DB3",crystalTopup:"\u51DD\u53D6\u7ED3\u6676",buyGenesisHeading:"\u8D2D\u4E70\u521B\u4E16\u7ED3\u6676",recomendedHeading:"\u63A8\u8350\u5546\u54C1",paimonHeading:"\u5C18\u8F89\u5151\u6362",welkinNote:"\u53EF\u7D2F\u8BA1\u8D2D\u4E70",limitedOffer:"\u9650\u65F6\u63D0\u4F9B\u8D2D\u4E70",noLimitTime:"\u5237\u65B0\u65F6\u95F4\uFF1A\u4E0D\u4F1A\u5237\u65B0",recomended:{welkin:"\u7A7A\u6708\u795D\u798F",newOutfit:"\u89D2\u8272\u88C5\u626E \xB7 \u65B0\u88C5",dayRemaining:"\u5269\u4F59 {days} \u5929",alreadyClaimed:"\u672C\u65E5\u5DF2\u9886\u53D6",instantlyGet:"\u8D2D\u4E70\u5373\u53EF\u83B7\u5F97",dailyGift:"\u6BCF\u65E5\u8D60\u9001",obtainTotal:"*\u6709\u6548\u671F\u6301\u7EED30\u5929\uFF01\u7D2F\u8BA1\u53EF\u83B7\u5F97{totalGenesis}\u521B\u4E16\u7ED3\u6676\u548C{totalPrimo}\u539F\u77F3\uFF01",claimingBlessing:"\u70B9\u51FB\u9886\u53D6\u4ECA\u65E5\u7A7A\u6708\u795D\u798F\u5956\u52B1",issuedPurchase:"\u8D2D\u4E70\u65F6\u83B7\u5F97",collect:"\u6BCF\u65E5\u767B\u5F55\u5956\u52B1"},exchange:{starglitter:"\u65E0\u4E3B\u7684\u661F\u8F89",stardust:"\u65E0\u4E3B\u7684\u661F\u5C18",primogem:"\u539F\u77F3\u8D2D\u4E70"},item:{genesis:"\u521B\u4E16\u7ED3\u6676",primogem:"\u539F\u77F3",intertwined:"\u7EA0\u7F20\u4E4B\u7F18",acquaint:"\u76F8\u9047\u4E4B\u7F18",starglitter:"\u65E0\u4E3B\u7684\u661F\u8F89",stardust:"\u65E0\u4E3B\u7684\u661F\u5C18"},description:{intertwined:"\u8FDE\u7ED3\u68A6\u60F3\u7684\u547D\u8FD0\u4E4B\u79CD\u3002\u7F18\u77F3\u8F89\u5149\u80FD\u8BA9\u672C\u65E0\u4EA4\u96C6\u7684\u547D\u8FD0\u4EA4\u9519\uFF0C\u8BA9\u5F7C\u6B64\u7684\u68A6\u60F3\u76F8\u8FDE\uFF0C\u6B63\u5982\u8FD9\u79CD\u5149\u8F89\u5C06\u7FA4\u661F\u8FDE\u6210\u5FC3\u4E4B\u6240\u5411\u7684\u56FE\u5F62\u3002",acquaint:"\u70B9\u4EAE\u661F\u7A7A\u7684\u5E0C\u671B\u4E4B\u79CD\u3002\u65E0\u8BBA\u76F8\u9694\u591A\u8FDC\uFF0C\u547D\u5B9A\u76F8\u9047\u7684\u4EBA\u90FD\u4F1A\u53D7\u7F18\u77F3\u8F89\u5149\u7684\u6307\u5F15\uFF0C\u5728\u661F\u7A7A\u4E0B\u76F8\u4F1A\u3002"}},z={text:"\u4ED3\u5E93",unsetOutfit:"\u672A\u8BBE\u7F6E\u88C5\u626E",setOutfit:"\u8BBE\u7F6E\u89D2\u8272\u88C5\u626E",refinement:"\u7CBE\u70BC\u7B49\u7EA7 {count}",constellation:"\u547D\u4E4B\u5EA7\u5C42\u6570 {count}",extra:"\u5DF2\u6EE1\u5E76\u6EA2\u51FA {count}",firstSummon:"\u9996\u6B21\u83B7\u5F97: {date}",notOwned:"\u5C1A\u672A\u62E5\u6709",sort:"\u6392\u5E8F",rarity:"\u7A00\u6709\u5EA6",name:"\u540D\u5B57",quantity:"\u6570\u91CF",element:"\u5143\u7D20",type:"\u7C7B\u578B",owned:"\u5DF2\u83B7\u5F97",showAllOption:"\u663E\u793A\u6240\u6709{item} ( {qty} \u5DF2\u83B7\u5F97 )"},H={no:"\u5426",yes:"\u662F",text:"\u83DC\u5355",options:"\u9009\u9879",updates:"\u66F4\u65B0\u5386\u53F2",language:"\u8BED\u8A00",fates:"\u65E0\u9650\u62BD\u6570",mute:"\u7981\u7528\u97F3\u9891\u97F3\u6548",switchBanner:"\u5207\u6362\u5361\u6C60",showAllitems:"\u5728\u5E93\u5B58\u4E2D\u663E\u793A\u6240\u6709\u7269\u54C1",displayFullscreen:"\u5168\u5C4F\u663E\u793A (\u6309 F11 \u952E)",factoryReset:"\u6E05\u9664\u6570\u636E\u5E76\u6062\u590D\u9ED8\u8BA4",rotate:"\u65CB\u8F6C\u8BBE\u5907\u4EE5\u83B7\u5F97\u66F4\u597D\u4F53\u9A8C",resetButton:"\u73B0\u5728\u91CD\u7F6E",resetPrompt:"\u60A8\u786E\u5B9A\u6E05\u9664<strong>\u6240\u6709\u6570\u636E</strong>\u5E76\u6062\u590D\u9ED8\u8BA4\u5417\uFF1F",resetDetail:"\u5B83\u8FD8\u4F1A\u4ECE\u4ED3\u5E93\u4E2D\u5220\u9664\u60A8\u7684\u5386\u53F2\u8BB0\u5F55\u3001\u57AB\u6570\u8BA1\u7B97\u3001\u4F59\u989D\u548C\u6240\u6709\u9879\u76EE\u3002",resetSuccess:"\u5DF2\u6210\u529F\u91CD\u7F6E"},I={format:"{symbol}{nominal}",symbol:"\xA5",welkin:30,genesis:{"60":6,"300":30,"980":98,"1980":198,"3280":328,"6480":648}};var G={title:e,character:n,weapon:a,vision:t,anemo:s,cryo:r,dendro:o,electro:i,hydro:p,geo:c,pyro:l,bow:d,catalyst:m,claymore:u,sword:g,polearm:h,extra:f,obtained:y,waiting:b,confirmButton:P,cancelButton:w,disclaimer:v,fanmade:U,pressToContinue:N,share:x,screenshot:B,capturing:C,rewardFirstShare:F,version:S,donate:W,wish:T,outfit:D,details:O,history:k,shop:q,inventory:z,menu:H,price:I};export{s as anemo,d as bow,w as cancelButton,C as capturing,m as catalyst,n as character,u as claymore,P as confirmButton,r as cryo,G as default,o as dendro,O as details,v as disclaimer,W as donate,i as electro,f as extra,U as fanmade,c as geo,k as history,p as hydro,z as inventory,H as menu,y as obtained,D as outfit,h as polearm,N as pressToContinue,I as price,l as pyro,F as rewardFirstShare,B as screenshot,x as share,q as shop,g as sword,e as title,S as version,t as vision,b as waiting,a as weapon,T as wish};
