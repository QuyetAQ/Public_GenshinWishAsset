const e="\u539F\u795E\u7948\u9858\u30B7\u30DF\u30E5",n="\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",a="\u6B66\u5668",t="\u795E\u306E\u76EE",s="\u98A8",r="\u6C37",o="\u8349",i="\u96F7",p="\u6C34",c="\u5CA9",l="\u708E",m="\u5F13",d="\u6CD5\u5668",u="\u4E21\u624B\u5263",g="\u7247\u624B\u5263",h="\u9577\u67C4\u6B66\u5668",f="\u8FFD\u52A0\u5831\u916C",b="\u7372\u5F97",y="\u304A\u5F85\u3061\u304F\u3060\u3055\u3044",w="OK",v="\u30AD\u30E3\u30F3\u30BB\u30EB",P="\u3053\u306E\u30B5\u30A4\u30C8\u3067\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30EA\u30BD\u30FC\u30B9\u306FmiHoYo\u304C\u6240\u6709\u3057\u3066\u3044\u307E\u3059\u3002",N="\u3053\u306E\u30A2\u30D7\u30EA\u306F\u30D5\u30A1\u30F3\u30E1\u30A4\u30C9\u3067\u3059\u3002\u3086\u3063\u304F\u308A\u3057\u3066\u3044\u3063\u3066\u306D\uFF01",x="\u7A7A\u767D\u90E8\u5206\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D9A\u884C",B="\u30B7\u30A7\u30A2",C="\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8",S="\u53D6\u5F97\u4E2D",F="\u521D\u56DE\u30B7\u30A7\u30A2\u5831\u916C : {qty}",W="Ver.",U="\u5BC4\u4ED8",O={rollButton:"{count}\u56DE\u7948\u9858",stellaFortuna:"\u8A72\u5F53\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u661F\u5C51",banner:{text:"\u7948\u9858",allBanner:"\u5168\u3066\u306E\u7948\u9858",previous:"\u904E\u53BB\u306E\u7948\u9858\u4E00\u89A7",findBanner:"\u7948\u9858\u3092\u691C\u7D22",group:"\u8868\u793A",events:"\u30A4\u30D9\u30F3\u30C8\u7948\u9858\u30FB\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC",beginner:"\u521D\u5FC3\u8005\u5FDC\u63F4\u7948\u9858",weapons:"\u30A4\u30D9\u30F3\u30C8\u7948\u9858\u30FB\u6B66\u5668",standard:"\u901A\u5E38\u7948\u9858",wishDescription:"\u7948\u9858\u309210\u56DE\u3059\u308B\u3068\u3001\u5FC5\u305A\u26054\u4EE5\u4E0A\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002",novice:"\u521D\u5FC3\u8005\u5411\u3051\u7948\u9858",up:"UP!",beginnerSet:"\u521D\u56DE10\u902320%\u30AA\u30D5\u3001{character}\u304C\u5FC5\u305A\u7372\u5F97\u53EF\u80FD",beginnerNote:"\u300C\u30E1\u30A4\u30C9\u306E\u793C\u5100\u306B\u6C17\u3092\u3064\u3051\u307E\u3059\u3002\u300D",beginnerChance:"\u6B8B\u308A\u56DE\u6570\uFF1A{chances}",standardNote:"\u901A\u5E38\u7948\u9858\u306F\u671F\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002",allWeaponTypes:"\u5168\u7A2E\u985E",etc:"etc.",probIncreased:"\u51FA\u73FE\u78BA\u7387\u30A2\u30C3\u30D7\uFF01",eventNote:"\u30A4\u30D9\u30F3\u30C8\u9650\u5B9A\u26055\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306F\u78BA\u7387UP\u671F\u9593\u4E2D\u306B\u305D\u308C\u305E\u308C\u306E\u7948\u9858\u304B\u3089\u3057\u304B\u7372\u5F97\u3067\u304D\u307E\u305B\u3093\u3002",viewDetails:"\u5177\u4F53\u7684\u306A\u5185\u5BB9\u306F\u3010\u8A73\u7D30\u3011\u304B\u3089\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002",name:{wanderlust:"\u5954\u8D70\u4E16\u9593","epitome-invocation":"\u795E\u92F3\u8CE6\u5F62","adrift-in-the-harbor":"\u9038\u4FD7\u9021\u5DE1","auric-blaze":"\u9EC4\u91D1\u3092\u7194\u304B\u3059\u70C8\u65E5","azure-excursion":"\u82B1\u8E0F\u307F\u6B69\u3080 \u84BC\u6D41","ballad-in-goblets":"\u676F\u306B \u6CE8\u304C\u308C\u305F\u8A69","born-of-ocean-swell":"\u6CE2\u6298\u308A\u306E\u5239\u90A3","caution-in-confidence":"\u6212\u52C5\u67A2\u7B56","dance-of-lantern":"\u9B5A\u9F8D\u706F\u663C","discerner-of-enigmas":"\u5929\u3092\u8ADC\u77E5\u305B\u3057 \u767D\u8896","drifting-luminescence":"\u6D77\u539F \u306B\u6D6E\u304B\u3076\u8679\u73E0","everbloom-violet":"\u83EF\u7D2B\u6AFB\u7DCB","farewell-of-snezhnaya":"\u51AC\u56FD\u3068\u306E\u5225\u308C","from-ashes-reborn":"\u6B8B\u706B\u5909\u76F8","gentry-of-hermitage":"\u5927\u96A0\u671D\u5E02","invitation-to-mundane-life":"\u706F\u5BB4\u306E\u62DB\u304D","leaves-in-the-wind":"\u8FBB\u98A8\u306B\u821E\u3046 \u843D\u8449","moment-of-bloom":"\u5F7C\u5CB8\u6E80\u958B","oni_s-royale":"\u9B3C\u9580\u95D8\u5BB4","reign-of-serenity":"\u5F71\u5BC2\u306E\u5929\u4E0B\u4EBA","secretum-secretorum":"\u795E\u79D8\u306E\u751F\u606F","sparkling-steps":"\u30D5\u30EC\u30A2\u306E\u8A2A\u308C","tapestry-of-golden-flames":"\u5929\u306E\u5DDD\u306B\u54B2\u304D\u3057 \u5927\u8F2A","the-heron_s-court":"\u767D\u9DFA\u306E\u5EAD","the-moongrass-enlightenment":"\u53E1\u667A\u3092\u6075\u3080 \u6708\u898B\u8349","the-transcendent-one-returns":"\u5875\u4E16\u306B\u623B\u308A\u3057\u4E00\u9DB4","twilight-arbiter":"\u51A5\u663C\u306E\u88C1\u5B9A","twirling-lotus":"\u512A\u3005\u305F\u308B \u84EE\u6B4C\u306E\u821E","viridescent-vigil":"\u6DF1\u304D\u68EE\u306E \u5DE1\u56DE\u8005"}},epitomizedPath:{text:"\u795E\u92F3\u8ECC\u5B9A",fatePoint:"\u547D\u5B9A\u5024",cancelPrompt:"\u73FE\u5728\u306E\u8ECC\u5B9A\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u304B\uFF1F",cancelDesc:"\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u305F\u5834\u5408\u3001\u547D\u5B9A\u5024\u306F\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u518D\u30AB\u30A6\u30F3\u30C8\u3055\u308C\u307E\u3059\u3002",selectWeapon:"\u8ECC\u5B9A\u3055\u308C\u305F\u6B66\u5668",chartCourseOf:"{target}\u3092\u8ECC\u5B9A\u3059\u308B",cancelCourse:"\u8ECC\u5B9A\u3092\u30AD\u30E3\u30F3\u30BB\u30EB",chartCourse:"\u8ECC\u5B9A",courseSetFor:"\u73FE\u5728\u306E\u8ECC\u5B9A: {selectedCourse}",description:["\u300C\u795E\u92F3\u8ECC\u5B9A\u300D\u306F\u4ECA\u671F\u306E\u300C\u795E\u92F3\u8CE6\u5F62\u300D\u3067\u306E\u7279\u5225\u4ED5\u69D8\u3067\u3059\u3002","\u4ECA\u671F\u306E\u300C\u795E\u92F3\u8CE6\u5F62\u300D\u3067\u3001\u5E0C\u671B\u306E\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u26055\u6B66\u5668\u3092\u8ECC\u5B9A\u3057\u305F\u5F8C\u3001\u7948\u9858\u3067<span>\u7372\u5F97\u3057\u305F\u26055\u6B66\u5668\u304C\u8ECC\u5B9A\u6B66\u5668\u3067\u306F\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u547D\u5B9A\u5024\u30921\u70B9\u7372\u5F97\u3057\u307E\u3059</span>\u3002","\u547D\u5B9A\u5024\u304C\u4E0A\u9650\u306B\u9054\u3057\u305F\u6642\u3001\u6B21\u306B\u4ECA\u671F\u306E\u300C\u795E\u92F3\u8CE6\u5F62\u300D\u3067\u26055\u6B66\u5668\u3092\u7372\u5F97\u3057\u305F\u5834\u5408\u3001\u5FC5\u305A\u73FE\u5728\u306E\u8ECC\u5B9A\u6B66\u5668\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002","\u4ECA\u671F\u306E\u300C\u795E\u92F3\u8CE6\u5F62\u300D\u3067\u3001\u7948\u9858\u3067<span>\u300C\u795E\u92F3\u8ECC\u5B9A\u300D\u306E\u6B66\u5668\u3092\u7372\u5F97\u3057\u305F\u6642\u3001\u547D\u5B9A\u5024\u304C\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u518D\u30AB\u30A6\u30F3\u30C8\u3055\u308C\u307E\u3059</span>\u3002","\u300C\u795E\u92F3\u8ECC\u5B9A\u300D\u3092\u4F7F\u3063\u3066\u6B66\u5668\u3092\u8ECC\u5B9A\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u547D\u5B9A\u5024\u306F\u7D2F\u8A08\u3055\u308C\u307E\u305B\u3093\u3002","\u6B66\u5668\u306E\u8ECC\u5B9A\u72B6\u614B\u3092\u5909\u66F4\u307E\u305F\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002<span>\u73FE\u5728\u306E\u8ECC\u5B9A\u6B66\u5668\u3092\u5909\u66F4\u307E\u305F\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u305F\u5834\u5408\u3001\u547D\u5B9A\u5024\u306F\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u518D\u30AB\u30A6\u30F3\u30C8\u3055\u308C\u307E\u3059</span>\u3002","<span>\u4ECA\u671F\u306E\u300C\u795E\u92F3\u8CE6\u5F62\u300D\u304C\u7D42\u4E86\u3057\u305F\u5F8C\u3001\u547D\u5B9A\u5024\u306F\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059</span>\u3002"]},result:{skip:"\u30B9\u30AD\u30C3\u30D7",meteorFailed:"\u7948\u9858\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F",new:"\u65B0\u898F",convertion:"\u5909\u63DB",title:"{item} \u7948\u9858\u7D50\u679C"}},T={heading:"\u30AD\u30E3\u30E9\u5916\u89B3",setOutfit:"\u5207\u308A\u66FF\u3048",owned:"\u6240\u6709\u6E08",purchasePrompt:"\u5BFE\u5FDC\u3059\u308B\u30AD\u30E3\u30E9\u306F\u307E\u3060\u672A\u6240\u6301\u3067\u3059\u304C\u3001\u672C\u5F53\u306B\u3053\u306E\u30B3\u30B9\u30C1\u30E5\u30FC\u30E0\u3092\u8CFC\u5165\u3057\u307E\u3059\u304B\uFF1F",promptInfo:"\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u5165\u624B\u3057\u305F\u5F8C\u3067\u3082\u8CFC\u5165\u53EF\u80FD\u3067\u3059",item:{"5-star-outrider":{name:"\u300C\u6E80\u70B9\u306E\u5075\u5BDF\u9A0E\u58EB\u300D"},"favonian-fevotion":{name:"\u98A8\u306E\u52A0\u8B77"},"flowing-fate":{name:"\u661F\u547D\u6D41\u8EE2"},"executor_s-thorns":{name:"\u68D8\u306E\u51E6\u5211"},"sea-breeze-dandelion":{name:"\u6D77\u98A8\u306E\u5922",description:"\u590F\u3092\u30E2\u30C1\u30FC\u30D5\u306B\u3057\u305F\u30B8\u30F3\u306E\u8863\u88C5\u3002\u6DBC\u3057\u6C17\u306A\u4F5C\u308A\u3060\u304C\u3001\u540C\u6642\u306B\u512A\u96C5\u3055\u3082\u611F\u3058\u3089\u308C\u308B\u3002\u6D77\u8FBA\u306E\u65C5\u306B\u3074\u3063\u305F\u308A\u3002"},"summertime-sparkle":{name:"\u30B5\u30DE\u30FC\u30BF\u30A4\u30E0\u30B9\u30D1\u30FC\u30AF\u30EB",description:"\u6D77\u8FBA\u3092\u30E2\u30C1\u30FC\u30D5\u306B\u3057\u305F\u30D0\u30FC\u30D0\u30E9\u306E\u8863\u88C5\u3002\u590F\u306E\u6D3B\u6C17\u6EA2\u308C\u308B\u714C\u3073\u3084\u304B\u306A\u30B9\u30AB\u30FC\u30C8\u304B\u3089\u306F\u3001\u723D\u3084\u304B\u306A\u6D77\u306E\u9999\u308A\u304C\u6F02\u3063\u3066\u304F\u308B\u3002"},"opulent-splendor":{name:"\u9713\u88FE\u306E\u821E",description:"\u523B\u6674\u306E\u793C\u670D\u3002\u6D77\u706F\u796D\u306E\u4F73\u666F\u306E\u4E2D\u3001\u904E\u53BB\u306E\u82E6\u5FC3\u306B\u3088\u308A\u63CF\u304B\u308C\u305F\u7DDA\u306B\u306F\u3001\u4ECA\u5BB5\u306E\u8EFD\u3084\u304B\u3067\u9E97\u3057\u3044\u59FF\u304C\u7E54\u308A\u8FBC\u307E\u308C\u3066\u3044\u308B\u3002"},"orchid_s-evening-gown":{name:"\u7D17\u306E\u5E7D\u862D",description:"\u51DD\u5149\u306E\u793C\u670D\u3002\u7D3A\u8272\u306E\u30C9\u30EC\u30B9\u306F\u5F7C\u5973\u306E\u512A\u96C5\u3067\u7F8E\u3057\u3044\u66F2\u7DDA\u3092\u63CF\u304D\u3001\u8DB3\u9996\u3092\u98FE\u3063\u3066\u3044\u308B\u8776\u306E\u7FBD\u306F\u305F\u304A\u3084\u304B\u3055\u3092\u6F14\u51FA\u3057\u3066\u3044\u308B\u3002"},"ein-immernachtstraum":{name:"\u6975\u591C\u306E\u771F\u5922",description:"\u7687\u5973\u30D5\u30A3\u30C3\u30B7\u30E5\u30EB\u306E\u796D\u793C\u8863\u88C5\u3002\u9AD8\u8CB4\u306A\u308B\u8005\u304C\u3044\u3064\u307E\u3067\u3082\u52C7\u6C17\u3068\u8AA0\u610F\u3001\u305D\u3057\u3066\u5584\u826F\u306A\u5FC3\u3092\u6301\u3061\u7D9A\u3051\u3001\u3044\u304B\u306A\u308B\u60AA\u306B\u3082\u5C48\u3057\u306A\u3044\u3088\u3046\u306B\u3002"},"red-dead-of-night":{name:"\u30EC\u30C3\u30C9\u30C7\u30C3\u30C9\u30FB\u30AA\u30D6\u30FB\u30CA\u30A4\u30C8",description:"\u30C7\u30A3\u30EB\u30C3\u30AF\u304C\u96A0\u5BC6\u884C\u52D5\u3092\u3059\u308B\u969B\u306B\u7740\u308B\u8863\u88C5\u306E\u4E00\u3064\u3002\u305D\u308C\u306F\u307E\u308B\u3067\u3001\u5F71\u306E\u4E2D\u3067\u71C3\u3048\u308B\u708E\u306E\u3088\u3046\u3002\u6575\u306E\u76EE\u306B\u713C\u304D\u4ED8\u3044\u305F\u6DF1\u7D05\u306E\u6B8B\u75D5\u306F\u3001\u5F7C\u3089\u306B\u6D88\u3048\u308B\u3053\u3068\u306E\u306A\u3044\u60AA\u5922\u3092\u690D\u3048\u4ED8\u3051\u308B\u3002"},"a-sobriquet-under-shade":{name:"\u8449\u306B\u96A0\u308C\u3057\u82B3\u540D",description:"\u30EA\u30B5\u304C\u30B9\u30E1\u30FC\u30EB\u3092\u518D\u8A2A\u3057\u305F\u969B\u306B\u4F5C\u3089\u305B\u305F\u8863\u88C5\u3002 \u670D\u88C5\u306E\u5B9F\u7528\u6027\u3068\u30A8\u30EC\u30AC\u30F3\u30B9\u306E\u30D0\u30E9\u30F3\u30B9\u306F\u7D76\u5999\u3002 \u30EA\u30B5\u306E\u5B66\u751F\u6642\u4EE3\u306E\u5236\u670D\u3068\u5C11\u3057\u4F3C\u3066\u3044\u308B\u3002"},"springbloom-missive":{name:"\u82B1\u6642\u306B\u8A2A\u308C\u305F\u624B\u7D19",description:"\u795E\u91CC\u7DBE\u83EF\u306E\u304A\u51FA\u304B\u3051\u8863\u88C5\u3002 \u5A2F\u697D\u5C0F\u8AAC\u306E\u633F\u7D75\u306B\u767B\u5834\u3059\u308B\u30D5\u30A9\u30F3\u30C6\u30FC\u30CC\u5973\u6027\u306E\u8863\u88C5\u3092\u30E2\u30C1\u30FC\u30D5\u306B\u3057\u305F\u6D0B\u670D\u3067\u3001 \u30D5\u30A9\u30F3\u30C6\u30FC\u30CC\u306E\u8CB4\u5A66\u4EBA\u306E\u751F\u6D3B\u3092\u57A3\u9593\u898B\u3066\u3044\u308B\u3088\u3046\u306A\u6C17\u5206\u306B\u3055\u305B\u3066\u304F\u308C\u308B\u3002"}}},D={text:"\u8A73\u7D30\u8AAC\u660E",increasedRate:"\u4EE5\u4E0B\u306E\u30A2\u30A4\u30C6\u30E0\u300C\u51FA\u73FE\u78BA\u7387UP\uFF01\uFF01\uFF01\u300D",percentageDrop:"\u2605{rarity}\u51FA\u73FE\u78BA\u7387\u306E{percentage}",wishDetails:"\u7948\u9858\u306E\u8A73\u7D30\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002",probInfo:"\u2605{rarity}\u30A2\u30A4\u30C6\u30E0\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F\uFF1A{singlePercentage} (\u5929\u4E95\u3092\u542B\u3080\u7DCF\u5408\u51FA\u73FE\u78BA\u7387\u306F\uFF1A{avgPercentage})",itemWishFor:"\u30E9\u30A4\u30F3\u30CA\u30C3\u30D7\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059\u3002",itemType:"\u30BF\u30A4\u30D7",itemName:"\u30BF\u30A4\u30C8\u30EB",beginnerInfo:"\u671F\u9650\u306A\u3057\uFF0820\u9023\u306E\u7948\u9858\u5F8C\u306B\u7D42\u4E86\uFF09",limited:"\u671F\u9593\u9650\u5B9A\u30A4\u30D9\u30F3\u30C8",permanent:"\u671F\u9650\u306A\u3057",alert:"\u203B\u5F53\u7948\u9858\u306F\u300C{wishName}\u300D\u3067\u3059\u3002\u7948\u9858\u56DE\u6570\u306E\u7D2F\u8A08\u306F\u300C{wishName}\u300D\u306E\u307F\u3067\u6570\u3048\u3089\u308C\u3001\u4ED6\u306E\u7948\u9858\u3068\u306F\u5225\u30AB\u30A6\u30F3\u30C8\u3055\u308C\u307E\u3059\u3002",beginner:["\u521D\u5FC3\u8005\u5FDC\u63F4\u7948\u9858\u306F\u65E5\u6642\u306B\u3088\u308B\u671F\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u5F53\u7948\u9858\u306F\u30C6\u30A4\u30EF\u30C3\u30C8\u306E\u65B0\u7C73\u65C5\u4EBA\u5411\u3051\u306E\u5FDC\u63F4\u7948\u9858\u3068\u306A\u308A\u307E\u3059\u3002\u5F53\u7948\u9858\u3067\u306F\u300110\u9023\u3067\u6D88\u8017\u3059\u308B\u51FA\u4F1A\u3044\u306E\u7E01\u306E\u6570\u304C<span>20%\u30AA\u30D5</span>\u306B\u306A\u308A\u307E\u3059\u3002\u306A\u304A\u3001\u521D\u56DE10\u9023\u3067<span>\u5FC5\u305A</span>\u300C{character}\u300D\u304C\u51FA\u73FE\u3057\u3001\u6B21\u306E10\u9023\u3067\u5FC5\u305A<span>\u4ED6\u306E</span>\u26054\u3001\u307E\u305F\u306F\u305D\u308C\u4EE5\u4E0A\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u304C\u51FA\u73FE\u3057\u307E\u3059\uFF01\u5F53\u7948\u9858\u306F\u7948\u9858\u56DE\u6570\u306E\u4E0A\u9650\u304C\u3042\u308A\u307E\u3059\u3002\u304A\u4E00\u4EBA\u69D8<span>20\u9023</span>\u9650\u308A\u3068\u306A\u308A\u307E\u3059\u300220\u9023\u3092\u5F15\u304D\u7D42\u3048\u308B\u3053\u3068\u3067\u7948\u9858\u7D42\u4E86\u306B\u306A\u308A\u307E\u3059\u3002","\u203B\u901A\u5E38\u3001\u5168\u3066\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3068\u6B66\u5668\u306F\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u304C\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u78BA\u7387UP\u304C\u3042\u308B\u3001\u307E\u305F\u306F\u5929\u4E95\u304C\u767A\u52D5\u3057\u305F\u5834\u5408\u306E\u78BA\u7387\u306F\u3001\u8A72\u5F53\u3059\u308B\u7948\u9858\u306E\u8A73\u7D30\u8AAC\u660E\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002","\u3013\u7948\u9858\u8AAC\u660E\u3013","\u26055\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>0.600%</span>\u3067\u3059\u3002\u26054\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>5.100%</span>\u3067\u3059\u3002\u7DCF\u5408\u78BA\u7387\uFF08\u5929\u4E95\u3092\u542B\u3081\u3066\uFF09\u306F<span>13.000%</span>\u3067\u3059\u3002\u6700\u5927<span>10\u9023</span>\u7948\u9858\u3067\u5FC5\u305A\u26054\u3001\u307E\u305F\u306F\u305D\u308C\u4EE5\u4E0A\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002"],standard:["\u901A\u5E38\u7948\u9858\u30FB\u300C{bannerName}\u300D\u306F\u65E5\u6642\u306B\u3088\u308B\u671F\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u5F53\u7948\u9858\u3067\u306F\u3001\u975E\u9650\u5B9A\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3068\u6B66\u5668\u304C\u51FA\u73FE\u3057\u307E\u3059\u3002\u5F53\u7948\u9858\u3067\u306F\u300110\u9023\u6BCE\u306B<span>\u5FC5\u305A</span>\u26054\u3001\u307E\u305F\u306F\u305D\u308C\u4EE5\u4E0A\u306E\u30A2\u30A4\u30C6\u30E0\u304C\u51FA\u73FE\u3057\u307E\u3059\u3002","\u203B\u901A\u5E38\u3001\u5168\u3066\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3068\u6B66\u5668\u306F\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u304C\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u78BA\u7387UP\u304C\u3042\u308B\u3001\u307E\u305F\u306F\u5929\u4E95\u304C\u767A\u52D5\u3057\u305F\u5834\u5408\u306E\u78BA\u7387\u306F\u3001\u8A72\u5F53\u3059\u308B\u7948\u9858\u306E\u8A73\u7D30\u8AAC\u660E\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002","\u3013\u7948\u9858\u8AAC\u660E\u3013","\u26055\u30A2\u30A4\u30C6\u30E0\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>0.600%</span>\u3067\u3059\u3002\u26055\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>0.300%</span>\u3067\u3059\u3002\u26055\u6B66\u5668\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>0.300%</span>\u3067\u3059\u3002\u26055\u30A2\u30A4\u30C6\u30E0\u306E\u7DCF\u5408\u51FA\u73FE\u78BA\u7387\uFF08\u5929\u4E95\u3092\u542B\u3081\u3066\uFF09\u306F<span>1.600%</span>\u3067\u3059\u3002\u6700\u5927<span>90</span>\u9023\u7948\u9858\u3067\u5FC5\u305A\u26055\u30A2\u30A4\u30C6\u30E0\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002<br>\u26054\u30A2\u30A4\u30C6\u30E0\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>5.100%</span>\u3067\u3059\u3002\u26054\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>2.550%</span>\u3067\u3059\u3002\u26054\u6B66\u5668\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>2.550%</span>\u3067\u3059\u3002\u26054\u30A2\u30A4\u30C6\u30E0\u306E\u7DCF\u5408\u51FA\u73FE\u78BA\u7387\uFF08\u5929\u4E95\u3092\u542B\u3081\u3066\uFF09\u306F<span>13.000%</span>\u3067\u3059\u3002\u6700\u592710\u9023\u7948\u9858\u3067\u5FC5\u305A\u26054\u3001\u307E\u305F\u306F\u305D\u308C\u4EE5\u4E0A\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002<span>10</span>\u9023\u306E\u78BA\u5B9A\u67A0\u3067\u26054\u30A2\u30A4\u30C6\u30E0\u3092\u7372\u5F97\u3067\u304D\u308B\u78BA\u7387\u306F<span>99.400%</span>\u3001\u26055\u30A2\u30A4\u30C6\u30E0\u3092\u7372\u5F97\u3067\u304D\u308B\u78BA\u7387\u306F<span>0.600%</span>\u3067\u3059\u3002"],events:["\u30A4\u30D9\u30F3\u30C8\u7948\u9858\u30FB\u300C{bannerName}\u300D\u304C\u958B\u59CB\u3055\u308C\u307E\u3057\u305F\u3002\u30A4\u30D9\u30F3\u30C8\u671F\u9593\u4E2D\u3001<span>\u9650\u5B9A</span>\u26055\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u300C{featuredCharacter}\u300D\u3001\u26054\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u300C{rateupCharacters}\u300D\u306E\u51FA\u73FE\u78BA\u7387\u304C<span>\u5927\u5E45\u306BUP</span>\uFF01<br/><span> \u203B\u4E0A\u8A18\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u4E2D\u3067\u3001\u9650\u5B9A\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306F\u901A\u5E38\u7948\u9858\u30FB\u300C\u5954\u8D70\u4E16\u9593\u300D\u306B\u5B9F\u88C5\u3055\u308C\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002 </span>","\u203B\u901A\u5E38\u3001\u5168\u3066\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3068\u6B66\u5668\u306F\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u304C\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u78BA\u7387UP\u304C\u3042\u308B\u3001\u307E\u305F\u306F\u5929\u4E95\u304C\u767A\u52D5\u3057\u305F\u5834\u5408\u306E\u78BA\u7387\u306F\u3001\u8A72\u5F53\u3059\u308B\u7948\u9858\u306E\u8A73\u7D30\u8AAC\u660E\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002","\u3013\u7948\u9858\u8AAC\u660E\u3013","\u3010\u26055\u30A2\u30A4\u30C6\u30E0\u3011","\u4ECA\u671F\u306E\u30A4\u30D9\u30F3\u30C8\u7948\u9858\u30FB\u300C{bannerName}\u300D\u306B\u304A\u3044\u3066\u3001\u26055\u30A2\u30A4\u30C6\u30E0\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>0.600%</span>\u3067\u3059\u3002\u7DCF\u5408\u51FA\u73FE\u78BA\u7387\uFF08\u5929\u4E95\u3092\u542B\u3081\u3066\uFF09\u306F<span>1.600%</span>\u3067\u3059\u3002\u6700\u5927<span>90</span>\u9023\u7948\u9858\u3067\u5FC5\u305A\u26055\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002\u26055\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u304C\u51FA\u73FE\u3057\u305F\u6642\u3001<span>50.000%</span>\u306E\u78BA\u7387\u3067\u4ECA\u671F\u306E\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u300C{featuredCharacter}\u300D\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002\u7372\u5F97\u3057\u305F\u26055\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u304C\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3067\u306F\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u6B21\u306B\u5F53\u7948\u9858\u3067\u26055\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u7372\u5F97\u3057\u305F\u6642\u306B<span>\u5FC5\u305A</span>\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u26055\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002","\u3010\u26054\u30A2\u30A4\u30C6\u30E0\u3011","\u4ECA\u671F\u306E\u30A4\u30D9\u30F3\u30C8\u7948\u9858\u30FB\u300C{bannerName}\u300D\u306B\u304A\u3044\u3066\u3001\u26054\u30A2\u30A4\u30C6\u30E0\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>5.100%</span>\u3067\u3059\u3002\u26054\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>2.550%</span>\u3067\u3059\u3002\u26054\u6B66\u5668\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>2.550%</span>\u3067\u3059\u3002\u26054\u30A2\u30A4\u30C6\u30E0\u306E\u7DCF\u5408\u51FA\u73FE\u78BA\u7387\uFF08\u5929\u4E95\u3092\u542B\u3081\u3066\uFF09\u306F<span>13.000%</span>\u3067\u3059\u3002\u6700\u592710\u9023\u7948\u9858\u3067\u5FC5\u305A\u26054\u3001\u307E\u305F\u306F\u305D\u308C\u4EE5\u4E0A\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002<span>10</span>\u9023\u306E\u78BA\u5B9A\u67A0\u3067\u26054\u30A2\u30A4\u30C6\u30E0\u3092\u7372\u5F97\u3067\u304D\u308B\u78BA\u7387\u306F<span>99.400%</span>\u3001\u26055\u30A2\u30A4\u30C6\u30E0\u3092\u7372\u5F97\u3067\u304D\u308B\u78BA\u7387\u306F<span>0.600%</span>\u3067\u3059\u3002<br>\u26054\u30A2\u30A4\u30C6\u30E0\u304C\u51FA\u73FE\u3057\u305F\u6642\u3001<span>50.000%</span>\u306E\u78BA\u7387\u3067\u4ECA\u671F\u306E\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u300C{rateupCharacters}\u300D\u304B\u30891\u4F53\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002\u7372\u5F97\u3057\u305F\u26054\u30A2\u30A4\u30C6\u30E0\u304C\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3067\u306F\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u6B21\u306B\u5F53\u7948\u9858\u3067\u26054\u30A2\u30A4\u30C6\u30E0\u3092\u7372\u5F97\u3057\u305F\u6642\u306B<span>\u5FC5\u305A</span>\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u26054\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002\u7948\u9858\u3067\u7372\u5F97\u3067\u304D\u308B\u4ECA\u671F\u306E\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u26054\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u51FA\u73FE\u78BA\u7387\u306F\u5747\u7B49\u3067\u3059\u3002"],weapons:["\u30A4\u30D9\u30F3\u30C8\u7948\u9858\u30FB\u300C{bannerName}\u300D\u304C\u958B\u59CB\u3055\u308C\u307E\u3057\u305F\u3002\u30A4\u30D9\u30F3\u30C8\u671F\u9593\u4E2D\u3001<span>\u9650\u5B9A</span>\u26055\u6B66\u5668\u300C{featuredWeapon1}\u300D\u3001\u300C{featuredWeapon2}\u300D\u3001\u26054\u6B66\u5668\u300C{rateupWeapons}\u300D\u306E\u51FA\u73FE\u78BA\u7387\u304C<span>\u5927\u5E45\u306BUP</span>\uFF01<br/><span> \u203B\u4E0A\u8A18\u306E\u6B66\u5668\u306E\u4E2D\u3067\u3001\u9650\u5B9A\u6B66\u5668\u304C\u901A\u5E38\u7948\u9858\u30FB\u300C\u5954\u8D70\u4E16\u9593\u300D\u306B\u5B9F\u88C5\u3055\u308C\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002 </span>","\u203B\u901A\u5E38\u3001\u5168\u3066\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3068\u6B66\u5668\u306F\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u304C\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u78BA\u7387UP\u304C\u3042\u308B\u3001\u307E\u305F\u306F\u5929\u4E95\u304C\u767A\u52D5\u3057\u305F\u5834\u5408\u306E\u78BA\u7387\u306F\u3001\u8A72\u5F53\u3059\u308B\u7948\u9858\u306E\u8A73\u7D30\u8AAC\u660E\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002","\u3013\u7948\u9858\u8AAC\u660E\u3013","\u3010\u26055\u30A2\u30A4\u30C6\u30E0\u3011","\u4ECA\u671F\u306E\u30A4\u30D9\u30F3\u30C8\u7948\u9858\u30FB\u300C{bannerName}\u300D\u306B\u304A\u3044\u3066\u3001\u26055\u6B66\u5668\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>0.700%</span>\u3067\u3059\u3002\u7DCF\u5408\u51FA\u73FE\u78BA\u7387\uFF08\u5929\u4E95\u3092\u542B\u3081\u3066\uFF09\u306F<span>1.850%</span>\u3067\u3059\u3002\u6700\u5927<span>80</span>\u9023\u7948\u9858\u3067\u5FC5\u305A\u26055\u6B66\u5668\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002<br/>\u26055\u6B66\u5668\u304C\u51FA\u73FE\u3057\u305F\u6642\u3001<span>75.000%</span>\u306E\u78BA\u7387\u3067\u4ECA\u671F\u306E\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u6B66\u5668\u300C{featuredWeapon1}\u300D\u3001\u300C{featuredWeapon2}\u300D\u304B\u30891\u672C\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002\u7372\u5F97\u3057\u305F\u26055\u6B66\u5668\u304C\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u6B66\u5668\u3067\u306F\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u6B21\u306B\u5F53\u7948\u9858\u3067\u26055\u6B66\u5668\u3092\u7372\u5F97\u3057\u305F\u6642\u306B<span>\u5FC5\u305A</span>\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u26055\u6B66\u5668\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002\u547D\u5B9A\u5024\u304C\u4E0A\u9650\u306B\u9054\u3057\u3066\u3044\u306A\u3044\u72B6\u6CC1\u3067\u3001\u7948\u9858\u3067\u26055\u6B66\u5668\u3092\u7372\u5F97\u3057\u305F\u5834\u5408\u3001\u4ECA\u671F\u306E\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u6B66\u5668\u3054\u3068\u306E\u51FA\u73FE\u78BA\u7387\u306F\u5747\u7B49\u3067\u3059\u3002<br/>\u4ECA\u671F\u306E\u30A4\u30D9\u30F3\u30C8\u7948\u9858\u30FB\u300C{bannerName}\u300D\u3067\u306F\u3001\u300C\u795E\u92F3\u8ECC\u5B9A\u300D\u3092\u4F7F\u3063\u3066\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u26055\u6B66\u5668\u3092\u8ECC\u5B9A\u3067\u304D\u307E\u3059\u3002\u8ECC\u5B9A\u6B66\u5668\u306E\u9078\u629E\u306F\u4ECA\u671F\u306E\u30A4\u30D9\u30F3\u30C8\u7948\u9858\u30FB\u300C{bannerName}\u300D\u671F\u9593\u4E2D\u306E\u307F\u6709\u52B9\u3067\u3059\u3002<br/>\u4ECA\u671F\u306E\u30A4\u30D9\u30F3\u30C8\u7948\u9858\u30FB\u300C{bannerName}\u300D\u306B\u304A\u3044\u3066\u3001\u300C\u795E\u92F3\u8ECC\u5B9A\u300D\u3092\u4F7F\u3063\u3066\u6B66\u5668\u3092\u8ECC\u5B9A\u3057\u305F\u5F8C\u306B\u7372\u5F97\u3057\u305F\u26055\u6B66\u5668\u304C\u8ECC\u5B9A\u6B66\u5668\u3067\u306F\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u547D\u5B9A\u5024\u30921\u70B9\u7372\u5F97\u3057\u307E\u3059\u3002\u547D\u5B9A\u5024\u304C<span>\u4E0A\u9650</span>\u306B\u9054\u3057\u305F\u6642\u3001\u6B21\u306B\u4ECA\u671F\u306E\u7948\u9858\u3067\u26055\u6B66\u5668\u3092\u7372\u5F97\u3057\u305F\u5834\u5408\u3001<span>\u5FC5\u305A</span>\u73FE\u5728\u306E\u8ECC\u5B9A\u6B66\u5668\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002\u73FE\u5728\u306E\u8ECC\u5B9A\u6B66\u5668\u3092\u7372\u5F97\u3057\u305F\u6642\u3001\u547D\u5B9A\u5024\u304C\u4E0A\u9650\u306B\u9054\u3057\u3066\u3044\u308B\u304B\u5426\u304B\u306B\u95A2\u308F\u3089\u305A\u3001<span>0</span>\u306B\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u518D\u30AB\u30A6\u30F3\u30C8\u3055\u308C\u307E\u3059\u3002<br/>\u300C\u795E\u92F3\u8ECC\u5B9A\u300D\u3092\u4F7F\u3063\u3066\u6B66\u5668\u3092\u8ECC\u5B9A\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u3001\u547D\u5B9A\u5024\u306F<span>\u7D2F\u8A08\u3055\u308C\u307E\u305B\u3093</span>\u3002<br/>\u8ECC\u5B9A\u6B66\u5668\u3092\u5909\u66F4\u307E\u305F\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u73FE\u5728\u306E\u8ECC\u5B9A\u6B66\u5668\u3092\u5909\u66F4\u307E\u305F\u306F\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u305F\u5834\u5408\u3001\u547D\u5B9A\u5024\u306F<span>0</span>\u306B\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u518D\u30AB\u30A6\u30F3\u30C8\u3055\u308C\u307E\u3059\u3002<br/>\u203B\u4ECA\u671F\u306E\u7948\u9858\u306E\u547D\u5B9A\u5024\u306F\u4ECA\u671F\u306E\u30A4\u30D9\u30F3\u30C8\u7948\u9858\u30FB\u300C{bannerName}\u300D\u671F\u9593\u4E2D\u306E\u307F\u6709\u52B9\u3067\u3059\u3002\u4ECA\u671F\u306E\u7948\u9858\u304C\u7D42\u4E86\u3057\u305F\u5F8C\u3001\u547D\u5B9A\u5024\u306F<span>0</span>\u306B\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002","\u3010\u26054\u30A2\u30A4\u30C6\u30E0\u3011","\u4ECA\u671F\u306E\u30A4\u30D9\u30F3\u30C8\u7948\u9858\u30FB\u300C{bannerName}\u300D\u306B\u304A\u3044\u3066\u3001\u26054\u30A2\u30A4\u30C6\u30E0\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>6.000%</span>\u3067\u3059\u3002\u26054\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>3.000%</span>\u3067\u3059\u3002\u26054\u6B66\u5668\u306E\u57FA\u790E\u51FA\u73FE\u78BA\u7387\u306F<span>3.000%</span>\u3067\u3059\u3002\u26054\u30A2\u30A4\u30C6\u30E0\u306E\u7DCF\u5408\u51FA\u73FE\u78BA\u7387\uFF08\u5929\u4E95\u3092\u542B\u3081\u3066\uFF09\u306F<span>14.500%</span>\u3067\u3059\u3002\u6700\u5927<span>10</span>\u9023\u7948\u9858\u3067\u5FC5\u305A\u26054\u3001\u307E\u305F\u306F\u305D\u308C\u4EE5\u4E0A\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002<span>10</span>\u9023\u306E\u78BA\u5B9A\u67A0\u3067\u26054\u30A2\u30A4\u30C6\u30E0\u3092\u7372\u5F97\u3067\u304D\u308B\u78BA\u7387\u306F<span>99.300%</span>\u3001\u26055\u30A2\u30A4\u30C6\u30E0\u3092\u7372\u5F97\u3067\u304D\u308B\u78BA\u7387\u306F<span>0.700%</span>\u3067\u3059\u3002 <br/>\u26054\u30A2\u30A4\u30C6\u30E0\u304C\u51FA\u73FE\u3057\u305F\u6642\u3001<span>75.000%</span>\u306E\u78BA\u7387\u3067\u4ECA\u671F\u306E\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u6B66\u5668\u300C{rateupWeapons}\u300D\u304B\u30891\u672C\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002\u7372\u5F97\u3057\u305F\u26054\u30A2\u30A4\u30C6\u30E0\u304C\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u6B66\u5668\u3067\u306F\u306A\u304B\u3063\u305F\u5834\u5408\u3001\u6B21\u306B\u5F53\u7948\u9858\u3067\u26054\u30A2\u30A4\u30C6\u30E0\u3092\u7372\u5F97\u3057\u305F\u6642\u306B<span>\u5FC5\u305A</span>\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u306E\u26054\u6B66\u5668\u3092\u7372\u5F97\u3067\u304D\u307E\u3059\u3002\u7948\u9858\u3067\u7372\u5F97\u3067\u304D\u308B\u4ECA\u671F\u306E\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u26054\u6B66\u5668\u306E\u51FA\u73FE\u78BA\u7387\u306F\u5747\u7B49\u3067\u3059\u3002"],convertion:{fiveStar:"\u7948\u9858\u3067\u26055\u6B66\u5668\u3092\u7372\u5F97\u3057\u305F\u6642\u3001\u540C\u6642\u306B{starglitter}\u309210\u500B\u7372\u5F97\u3067\u304D\u307E\u3059\u3002",fourStar:"\u26054\u6B66\u5668\u3092\u7372\u5F97\u3057\u305F\u6642\u3001\u540C\u6642\u306B{starglitter}\u30922\u500B\u7372\u5F97\u3067\u304D\u307E\u3059\u3002",threeStar:"\u26053\u6B66\u5668\u3092\u7372\u5F97\u3057\u305F\u6642\u3001\u540C\u6642\u306B{stardust}\u309215\u500B\u7372\u5F97\u3067\u304D\u307E\u3059\u3002"},duplicate:{heading:"\u3013\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u91CD\u8907\u7372\u5F97\u3013",text:"\u5404\u65B9\u6CD5\uFF08\u7948\u9858\u3001\u30B7\u30E7\u30C3\u30D7\u4EA4\u63DB\u3001\u30B7\u30B9\u30C6\u30E0\u914D\u5E03\u306A\u3069\uFF09\u3067\u3001\u26055\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u30922\uFF5E7\u56DE\u91CD\u8907\u3057\u3066\u7372\u5F97\u3057\u305F\u6642\u3001{stellaFortuna}1\u500B\u3068\u3001{starglitter}10\u500B\u306B\u5909\u63DB\u3055\u308C\u307E\u3059\u30028\u56DE\u76EE\u4EE5\u964D\u306E\u7372\u5F97\u3067\u306F\u3001{starglitter}25\u500B\u306B\u5909\u63DB\u3055\u308C\u307E\u3059\u3002<br/>\u5404\u65B9\u6CD5\uFF08\u7948\u9858\u3001\u30B7\u30E7\u30C3\u30D7\u4EA4\u63DB\u3001\u30B7\u30B9\u30C6\u30E0\u914D\u5E03\u306A\u3069\uFF09\u3067\u3001\u26054\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u30922\uFF5E7\u56DE\u91CD\u8907\u3057\u3066\u7372\u5F97\u3057\u305F\u6642\u3001{stellaFortuna}1\u500B\u3068\u3001{starglitter}2\u500B\u306B\u5909\u63DB\u3055\u308C\u307E\u3059\u30028\u56DE\u76EE\u4EE5\u964D\u306E\u7372\u5F97\u3067\u306F\u3001{starglitter}5\u500B\u306B\u5909\u63DB\u3055\u308C\u307E\u3059\u3002"}},k={text:"\u7948\u9858\u5C65\u6B74",resetButton:"\u30EA\u30BB\u30C3\u30C8",resetPromptTitle:"\u7948\u9858\u5C65\u6B74\u306E\u30EA\u30BB\u30C3\u30C8",resetPrompt:" {bannerName} \u304B\u3089\u6392\u51FA\u3055\u308C\u305F\u3059\u3079\u3066\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3068\u6B66\u5668\u304C\u30A4\u30F3\u30D9\u30F3\u30C8\u30EA\u304B\u3089\u524A\u9664\u3055\u308C\u307E\u3059\u3002 \u672C\u5F53\u306B\u30EA\u30BB\u30C3\u30C8\u3057\u307E\u3059\u304B\uFF1F",resetSuccess:"\u30EA\u30BB\u30C3\u30C8\u6210\u529F\uFF01",selectWish:"\u7948\u9858\u30BF\u30A4\u30D7",disclaimer:"\u3042\u306A\u305F\u306E\u7948\u9858\u30C7\u30FC\u30BF\u3092\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u4E0A\u306B\u4FDD\u5B58\u3059\u308B\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u30C7\u30FC\u30BF\u306F\u3059\u3079\u3066IndexedDB\u306B\u4FDD\u5B58\u3055\u308C\u308B\u305F\u3081\u3001\u30D6\u30E9\u30A6\u30B6\u306E\u30AD\u30E3\u30C3\u30B7\u30E5\u306B\u4FDD\u5B58\u3055\u308C\u308B\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002\u304A\u5BA2\u69D8\u304C\u524A\u9664/\u30EA\u30BB\u30C3\u30C8\u30DC\u30BF\u30F3\u3067\u624B\u52D5\u3067\u524A\u9664\u3059\u308B\u304B\u3001\u30D6\u30E9\u30A6\u30B6\u306E\u30C7\u30FC\u30BF\u3092\u6D88\u53BB\u3057\u306A\u3044\u9650\u308A\u3001\u524A\u9664\u3055\u308C\u307E\u305B\u3093\u3002",currentPity:"\u73FE\u5728\u306E\u5929\u4E95\u30AB\u30A6\u30F3\u30C8:",totalPull:"\u7948\u9858\u5408\u8A08\u56DE\u6570:",totalSpend:"\u6D88\u8CBB\u539F\u77F3\u7DCF\u6570:",filterTxt:"\u30D5\u30A3\u30EB\u30BF\u30FC",filter:"\u2605{rarity}",filterAll:"\u3059\u3079\u3066",pity:"\u5929\u4E95\u30AB\u30A6\u30F3\u30C8",timeReceived:"\u7948\u9858\u671F\u9593",waiting:"\u304A\u5F85\u3061\u304F\u3060\u3055\u3044",noData:"\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093",untracked:"\u30C8\u30E9\u30C3\u30AD\u30F3\u30B0\u3055\u308C\u3066\u3044\u307E\u305B\u3093"},q={text:"\u30B7\u30E7\u30C3\u30D7",paimonBargains:"\u30B9\u30BF\u30FC\u4EA4\u63DB",infsufficientFunds:"\u6B8B\u9AD8\u4E0D\u8DB3",fateNeeded:"{currency}\u304C{rollQty}\u500B\u8DB3\u308A\u307E\u305B\u3093\u304C\u3001",primoNeeded:"\u539F\u77F3\u3092{primoPrice}\u500B\u4F7F\u3063\u3066\u8CFC\u5165\u3057\u307E\u3059\u304B\uFF1F",purchaseUpto:"\u6570\u91CF\u9650\u5B9A 1",purchaseConfirm:"\u8CFC\u5165\u78BA\u8A8D",exchangeHeading:"\u30A2\u30A4\u30C6\u30E0\u3092\u4EA4\u63DB\u3059\u308B",purchaseHeading:"\u30A2\u30A4\u30C6\u30E0\u3092\u4EA4\u63DB\u3059\u308B",purchaseButton:"\u4EA4\u63DB",pay:"\u8CFC\u5165",product:"\u5546\u54C1",consume:"\u6D88\u8CBB",selectPayment:"\u6C7A\u6E08\u65B9\u6CD5",unrealWallet:"\u30BF\u30EB\u30BF\u30EA\u30E4",convertPrimo:"\u539F\u77F3\u306B\u81EA\u52D5\u5909\u63DB\u3057\u307E\u3059\u304B\uFF1F",proceedPayment:"\u8CFC\u5165",qty:"\u6570\u91CF",insufficient:"\u30A2\u30A4\u30C6\u30E0\u4E0D\u8DB3",crystalTopup:"\u7D50\u6676\u51DD\u7D50",buyGenesisHeading:"\u5275\u4E16\u7D50\u6676\u3092\u8CFC\u5165",recomendedHeading:"\u304A\u3059\u3059\u3081",paimonHeading:"\u30B9\u30BF\u30FC\u4EA4\u63DB",welkinNote:"\u91CD\u8907\u8CFC\u5165\u53EF\u80FD",limitedOffer:"\u671F\u9593\u9650\u5B9A\u4FA1\u683C",noLimitTime:"\u66F4\u65B0\u671F\u9593\uFF1A\u671F\u9650\u306A\u3057",recomended:{welkin:"\u7A7A\u6708\u306E\u795D\u798F",newOutfit:"\u65B0\u30B3\u30B9\u30C1\u30E5\u30FC\u30E0",dayRemaining:"\u6B8B\u308A {days}\u65E5",alreadyClaimed:"\u672C\u65E5\u53D6\u5F97\u6E08",instantlyGet:"\u8CFC\u5165\u3059\u308B\u3068\u7372\u5F97",dailyGift:"\u6BCF\u65E5\u8CB0\u3048\u308B",obtainTotal:"*\u6709\u6548\u671F\u965030\u65E5\uFF01\u7D2F\u8A08\u3067{totalGenesis}\u5275\u4E16\u7D50\u6676\u3068{totalPrimo}\u539F\u77F3\u304C\u7372\u5F97\u3067\u304D\u307E\u3059\uFF01",claimingBlessing:"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5831\u916C\u3092\u7372\u5F97",issuedPurchase:"\u8CFC\u5165\u3059\u308B\u3068\u7372\u5F97",collect:"\u6BCE\u65E5\u8CB0\u3048\u308B"},exchange:{starglitter:"\u30B9\u30BF\u30FC\u30E9\u30A4\u30C8\u4EA4\u63DB",stardust:"\u30B9\u30BF\u30FC\u30C0\u30B9\u30C8\u4EA4\u63DB",primogem:"\u539F\u77F3\u8CFC\u5165"},item:{genesis:"\u5275\u4E16\u7D50\u6676",primogem:"\u539F\u77F3",intertwined:"\u7D21\u304C\u308C\u305F\u904B\u547D",acquaint:"\u51FA\u4F1A\u3044\u306E\u7E01",starglitter:"\u7121\u4E3B\u306E\u30B9\u30BF\u30FC\u30E9\u30A4\u30C8",stardust:"\u7121\u4E3B\u306E\u30B9\u30BF\u30FC\u30C0\u30B9\u30C8"},description:{intertwined:"\u5922\u3092\u3064\u306A\u3050\u904B\u547D\u306E\u7A2E\u3002 \u77F3\u306E\u8F1D\u304D\u306F\u672C\u6765\u4EA4\u308F\u3089\u306A\u3044\u904B\u547D\u3092\u4EA4\u5DEE\u3055\u305B\u3001\u4E92\u3044\u306E\u5922\u3092\u7E4B\u3052\u3001\u307E\u3055\u306B\u3053\u306E\u8F1D\u304D\u306F\u661F\u661F\u306E\u5FC3\u306E\u8D74\u304F\u5F62\u306B\u7E4B\u3052\u308B\u3068\u540C\u3058\u3067\u3042\u308B\u3002",acquaint:"\u661F\u7A7A\u3092\u7167\u3089\u3059\u5E0C\u671B\u306E\u7A2E\u3002\u3069\u3093\u306A\u306B\u96E2\u308C\u3066\u3082\u3001\u7E01\u77F3\u306E\u5C0E\u304D\u3067\u3001\u904B\u547D\u306E\u4E8C\u4EBA\u306F\u661F\u7A7A\u306E\u4E0B\u3067\u5DE1\u308A\u4F1A\u3048\u308B\u3002"}},H={text:"\u30A4\u30F3\u30D9\u30F3\u30C8\u30EA",unsetOutfit:"\u8863\u88C5\u89E3\u9664",setOutfit:"\u8863\u88C5\u30C1\u30A7\u30F3\u30B8",refinement:"\u7CBE\u932C\u30E9\u30F3\u30AF {count}",constellation:"\u547D\u306E\u661F\u5EA7 {count}",extra:" \u8FFD\u52A0\u6240\u6301 {count}",firstSummon:"\u521D\u56DE\u7372\u5F97: {date}",notOwned:"\u672A\u6240\u6301",sort:"\u4E26\u3073\u66FF\u3048",rarity:"\u30EC\u30A2\u5EA6",name:"\u540D\u524D",quantity:"\u547D\u306E\u661F\u5EA7",element:"\u795E\u306E\u76EE",type:"\u6B66\u5668\u30BF\u30A4\u30D7",owned:"\u6240\u6301",showAllOption:"\u5168\u3066\u306E{item}\u3092\u8868\u793A ( {qty} \u4F53\u30FB\u500B\u7372\u5F97\u6E08\u307F )"},z={no:"\u30AA\u30D5",yes:"\u30AA\u30F3",text:"\u30E1\u30CB\u30E5\u30FC",options:"\u30AA\u30D7\u30B7\u30E7\u30F3",updates:"\u66F4\u65B0\u5C65\u6B74",language:"\u8A00\u8A9E",fates:"\u7121\u9650\u7948\u9858\u7DE8",mute:"BGM\u30FBSE\u3092\u30DF\u30E5\u30FC\u30C8",switchBanner:"\u7948\u9858\u5185\u5BB9\u306E\u5207\u66FF",showAllitems:"\u30A4\u30F3\u30D9\u30F3\u30C8\u30EA\u306E\u3059\u3079\u3066\u306E\u30A2\u30A4\u30C6\u30E0\u3092\u8868\u793A",displayFullscreen:"\u5168\u753B\u9762\u8868\u793A (F11 \u3092\u62BC\u3059)",factoryReset:"\u30C7\u30FC\u30BF\u306E\u6D88\u53BB\u3068\u521D\u671F\u5316",rotate:"\u3088\u308A\u826F\u3044\u4F53\u9A13\u306E\u305F\u3081\u306B\u7AEF\u672B\u306E\u56DE\u8EE2\u3092\u304A\u3059\u3059\u3081\u3057\u307E\u3059",resetButton:"\u30EA\u30BB\u30C3\u30C8",resetPrompt:"\u672C\u5F53\u306B\u3001<strong>\u3059\u3079\u3066\u306E\u30C7\u30FC\u30BF</strong>\u3092\u6D88\u53BB\u3057\u3066\u521D\u671F\u72B6\u614B\u306B\u623B\u3057\u307E\u3059\u304B\uFF1F",resetDetail:"\u7948\u9858\u5C65\u6B74\u3084\u30A4\u30F3\u30D9\u30F3\u30C8\u30EA\u306E\u30A2\u30A4\u30C6\u30E0\u306A\u3069\u3082\u6D88\u53BB\u3055\u308C\u307E\u3059\u3002",resetSuccess:"\u30EA\u30BB\u30C3\u30C8\u6210\u529F"},G={format:"{symbol}{nominal}",symbol:"\xA5",welkin:610,genesis:{"60":120,"300":610,"980":1840,"1980":3680,"3280":3280,"6480":12e3}};var I={title:e,character:n,weapon:a,vision:t,anemo:s,cryo:r,dendro:o,electro:i,hydro:p,geo:c,pyro:l,bow:m,catalyst:d,claymore:u,sword:g,polearm:h,extra:f,obtained:b,waiting:y,confirmButton:w,cancelButton:v,disclaimer:P,fanmade:N,pressToContinue:x,share:B,screenshot:C,capturing:S,rewardFirstShare:F,version:W,donate:U,wish:O,outfit:T,details:D,history:k,shop:q,inventory:H,menu:z,price:G};export{s as anemo,m as bow,v as cancelButton,S as capturing,d as catalyst,n as character,u as claymore,w as confirmButton,r as cryo,I as default,o as dendro,D as details,P as disclaimer,U as donate,i as electro,f as extra,N as fanmade,c as geo,k as history,p as hydro,H as inventory,z as menu,b as obtained,T as outfit,h as polearm,x as pressToContinue,G as price,l as pyro,F as rewardFirstShare,C as screenshot,B as share,q as shop,g as sword,e as title,W as version,t as vision,y as waiting,a as weapon,O as wish};
