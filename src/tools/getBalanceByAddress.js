/**
 * 根据用户地址列表，查询用户持有的meer余额
 */
// 用户地址列表
const userList = [
    {
        "user_address": "0xbfd86cc5c6fe5caffc394c0b50188e16bde660a7"
    },
    {
        "user_address": "0xc569a49aab66b101d98a8bb190e9443f7005ac61"
    },
    {
        "user_address": "0x3278affcc44f59db9bc287cf6707fa01e1687255"
    },
    {
        "user_address": "0xb3dd9be63653248a36319a7e2b1949ccf11863f7"
    },
    {
        "user_address": "0x8d4496a0f0932e38a7e9ebeb76c33ec88141dd1a"
    },
    {
        "user_address": "0x1b8a8cbbeb285be726fc8f5a6d443d33314d66b2"
    },
    {
        "user_address": "0x6bf468f1ad379da4bd7b2997dbe4e6972081f60d"
    },
    {
        "user_address": "0xd5849930e89df5624a2f57084bc304a3c462e1cc"
    },
    {
        "user_address": "0x9d56b75dc8da5c7a58c0fe3aa180607364737921"
    },
    {
        "user_address": "0x6f148dc468127418f933dcd44c2c4945684d9a80"
    },
    {
        "user_address": "0xa95206cef1fcccc8bdb187fc372002474afe3607"
    },
    {
        "user_address": "0xf62538cf83e5c15251e52b3fd29be104a2ca671c"
    },
    {
        "user_address": "0x07a3033c60fea44df7f9a6ad3ab629b02cc5f550"
    },
    {
        "user_address": "0x5655609591d2fa98271b876258d98c2bab32e6b1"
    },
    {
        "user_address": "0x244b4c699617e245bca6bbfb538d0012fa6d60b5"
    },
    {
        "user_address": "0x02327107cb1f316464abb5d9a2d1bd28271f235e"
    },
    {
        "user_address": "0xad2cfa20ca402b4bdb53b1044160899b669b0227"
    },
    {
        "user_address": "0xc2d35e507b689db596d66164be906c065d038ef4"
    },
    {
        "user_address": "0xb010fd5ebd4aac5f3394cba1af5554a59e51b062"
    },
    {
        "user_address": "0x2c235493007b1a93f89c12b4a9a826995abba645"
    },
    {
        "user_address": "0xbf3ad60cfc6e23cb0313afce5647c13c1ff47b37"
    },
    {
        "user_address": "0xe3f57ba43e30d050af27e40e7a59a06fb364b1e5"
    },
    {
        "user_address": "0xdd38fb95103352721e6c471dabd4f56243a3431c"
    },
    {
        "user_address": "0xfa433f4d989590869976cc82393509692b63c1e2"
    },
    {
        "user_address": "0x25dd28976a50fb961e48656780761365f170ef80"
    },
    {
        "user_address": "0x5ff82d0e7d52945de1a6cfe48bcadabe71e29db8"
    },
    {
        "user_address": "0xedf536f3b0ac2393f5d9b484a61dafad74802d4e"
    },
    {
        "user_address": "0x9a380afa483b8e5cdec67ce6f7581c35646ff761"
    },
    {
        "user_address": "0x46bbae04397a3058fdf628b0758ebb83297703cd"
    },
    {
        "user_address": "0x5d115e4195bb4f7974f37ec2fe1ae74229c3beef"
    },
    {
        "user_address": "0xed3680477ad1d9666d0ef4587d3dcb318ff59bb7"
    },
    {
        "user_address": "0x8d15e9bcb11e487f0b709a28c4945e0ab948f9d2"
    },
    {
        "user_address": "0xa94e1f41aceb76ed5b03d8c8e9b50d0c0951ac2c"
    },
    {
        "user_address": "0xd7557af9cbfc7692228233c78609c453a8bbeabf"
    },
    {
        "user_address": "0x1c7aa3101699cbe49a35faae4defd6c308144e98"
    },
    {
        "user_address": "0xf76b8148a70ac5f19506e2599e7893d6d6a88284"
    },
    {
        "user_address": "0xdcd4cb03f9cff617e18c42fba1697269ac79b523"
    },
    {
        "user_address": "0x2027776389a575f3ddbd126d9613d65a0f101cdb"
    },
    {
        "user_address": "0x9f257a01a5cd98086ff08aa849ceb9549e17160f"
    },
    {
        "user_address": "0x916f197cb4a6b071b00350f2b67677926e650026"
    },
    {
        "user_address": "0x4929f60ed5b547e3fc1d26325ba8f5816a462e87"
    },
    {
        "user_address": "0xebdb05f882b18ac5a0c5a7e2e81db30f3fa712f8"
    },
    {
        "user_address": "0xa9ad7f9f8784c36aeeff68410e07c47853089999"
    },
    {
        "user_address": "0x390be82bb8aeeffe46f7863c0cc3fc937be3e79c"
    },
    {
        "user_address": "0x3bb4e4b88a16f4fb36b27576d725a771a20ae047"
    },
    {
        "user_address": "0xe50cadbdef2ce78994b4c9681e8f8b66c1041928"
    },
    {
        "user_address": "0x085b72081928e155c7fe0b7a35467979802862be"
    },
    {
        "user_address": "0x3dbe6070168a0b79344439c76c0597fd9530467a"
    },
    {
        "user_address": "0x13c96c90b14d3eb19f5146d951f23eff2f57b331"
    },
    {
        "user_address": "0x21ca844cdcc7685eea61b5ae8f73a87571b281ec"
    },
    {
        "user_address": "0x8bc5fd70d898ff4780a9a4a1fbd33d3bee370bcc"
    },
    {
        "user_address": "0xa97064f198c28a7a09765aac03503f5a723038b1"
    },
    {
        "user_address": "0x54a7c0e466fa62c18a1c2d62e558b76bba8fd0cd"
    },
    {
        "user_address": "0xf929b61f135adf5725fd83276cd2f3374baf5f40"
    },
    {
        "user_address": "0x8fe778bcce90c753cae9e8c358c26300de27d239"
    },
    {
        "user_address": "0x80c3f4bc8b22bc0ade9886fb01f0a23820d5b2f0"
    },
    {
        "user_address": "0xa014454cc9362148d8e8ccd96ebcb82ac63b38be"
    },
    {
        "user_address": "0xf2876448ca667340f5d8161b803ef8e59ec35d5e"
    },
    {
        "user_address": "0x536ced84f8e38f0df5a566cb34d6d43f885d080e"
    },
    {
        "user_address": "0xc77b1cc59aee4dff7da3e94692514b5625412641"
    },
    {
        "user_address": "0x32d0174936be48aab19e93ce013a44fe0a524087"
    },
    {
        "user_address": "0xaa32806fdb4b8139bc83666a5dd8758cdabf2f1c"
    },
    {
        "user_address": "0x0880cf695a910615c5451efc5256ef4713ad425c"
    },
    {
        "user_address": "0x2dc646ed987a3006684063a0a450984c1dbf9236"
    },
    {
        "user_address": "0x7165e92deb5f9d4bc058dfc7976d7d083b2a1ce3"
    },
    {
        "user_address": "0xa3b47c72b63008d7df90333e63d19b819e69ec55"
    },
    {
        "user_address": "0x90ff12f266b0ca962e97080190b4f1ff99d31c50"
    },
    {
        "user_address": "0xf0314e18280c1519e7b5dbe1ea7f09ae0d8cb9da"
    },
    {
        "user_address": "0x597028f5376873e514f1f33355dda2625240974a"
    },
    {
        "user_address": "0x8b269a2b19c2568fdf741c6635d9af5f847ac3cb"
    },
    {
        "user_address": "0x4771d34e40023b572d4311e72e7640cb476f115d"
    },
    {
        "user_address": "0x7d88426f149a0e6ae78ebfd5e10827a1bb28b6e5"
    },
    {
        "user_address": "0x85d92107846a77a6b38f929683b2f384b4e6dfbd"
    },
    {
        "user_address": "0xcb98a0ae16dbf92f934b459727ac63f833739a56"
    },
    {
        "user_address": "0xdfae5a3f0691617160c251fb6985c4fdf9a4ebc4"
    },
    {
        "user_address": "0xd6eac542ae4b800729ee0563909edc14ea7eff38"
    },
    {
        "user_address": "0xb2d093773101d4e91e27ee242794c04884973eb4"
    },
    {
        "user_address": "0xb095bb848f8e1b642230e4f84d5254cf6212d1f3"
    },
    {
        "user_address": "0x82d09211bb5326634dff5c41ccd9a0f2728b9b9e"
    },
    {
        "user_address": "0xdcec266bd3af77f1034eed34814db78d20a6d295"
    },
    {
        "user_address": "0xb421c35e56ae44bef7deebb02b5cb247dd450d69"
    },
    {
        "user_address": "0x01c11e220e563baeb0d77a30b3a8fdb9c0a2b64f"
    },
    {
        "user_address": "0x141848b7fb4e8fa626b4f8cc5d7f0624c2b1ae86"
    },
    {
        "user_address": "0x0612ff0be22767d630905359c02cce834ecb74ce"
    },
    {
        "user_address": "0x7b7c4346b1968947f4e45b1aace5d457d0090aa9"
    },
    {
        "user_address": "0x9813419591f75a459ce670c503442463628d1ccc"
    },
    {
        "user_address": "0x9f65558b329d638cb838b3aca7b811dba377aac6"
    },
    {
        "user_address": "0xadbec4a75f0671bf4d0fb7515c1966abd1bc8367"
    },
    {
        "user_address": "0x520680f63c9b994a516539ac99279bc8f4be8d8f"
    },
    {
        "user_address": "0xacc9b4a25068e3503b935a1c8994f56ae182067c"
    },
    {
        "user_address": "0xc560c23dd5d5a4aa37a8181dbec8cf35862d3473"
    },
    {
        "user_address": "0x31dd904cd34432d93387c254a11b3b4bf2c6a72b"
    },
    {
        "user_address": "0x72ca1ba62928e6f4bd715cff6fb5ba3f13f8f277"
    },
    {
        "user_address": "0xb0b0f8f2e9c61520266fbe30465d05165e6664cc"
    },
    {
        "user_address": "0x40065560b62ab1c9ee16c2fe8903e3edac2a06bb"
    },
    {
        "user_address": "0x4445bbd1f0942857741eeba3b36970390e9cb887"
    },
    {
        "user_address": "0x13253130d08fe60886485731165e5c7731d867af"
    },
    {
        "user_address": "0x4edc7a04441de91ef8783c996267d57d87b85543"
    },
    {
        "user_address": "0x32e6621fe4099b853fc3891c1c2dda856c70c311"
    },
    {
        "user_address": "0xb51155f39a5dc4d32b9ac0d1806884dece2ebae1"
    },
    {
        "user_address": "0x2581dfa30c0fa73098b02eea1088c8c3b07c8703"
    },
    {
        "user_address": "0x3657b703f18977654dcddabd6a2b536bf46504c3"
    },
    {
        "user_address": "0x52e6e988c6e8df11bae755bd9e8d5fe7e1262189"
    },
    {
        "user_address": "0x1bb0374246dcc2511f1d82d555a2a75f4b257669"
    },
    {
        "user_address": "0xe85b8106d56d76ba9300cd7a4e5323554754a078"
    },
    {
        "user_address": "0xd2b51414c394329ec5d4c2f55ec4792c7f20fcdf"
    },
    {
        "user_address": "0xc16ddb12e7f083e40a965e379e7fcd8a00ce4f2f"
    },
    {
        "user_address": "0xc7694d6c3132c5dcb5573aadba527d43480fb53f"
    },
    {
        "user_address": "0x99b1a32f38412b4b9ecbb54bcc4fff265f6a2b2b"
    },
    {
        "user_address": "0x0f9c0d52802ad0b31d99c7395fd28c712a07c233"
    },
    {
        "user_address": "0xa4decb6dba9d91af6a6c66b4655ea52968ad991f"
    },
    {
        "user_address": "0x79f37fc8fa602c571e67bfe906dbbc57f8bb8807"
    },
    {
        "user_address": "0xb67732289b3eed5382869e69c97ea1018e1e3c05"
    },
    {
        "user_address": "0x8e64e44be67e76fc1222738ab15a8350585474ce"
    },
    {
        "user_address": "0x70ae6cb4bcf95a68a9488084ba7eb2f9baa80006"
    },
    {
        "user_address": "0xa6fdcc0b9410f716b95f396910adac6e8b825587"
    },
    {
        "user_address": "0x0b334490f0c148fad70184ed87f971f0186909d9"
    },
    {
        "user_address": "0x8b0207b549510c1907751a809cb6a3e4f2dcd03f"
    },
    {
        "user_address": "0x0aa694089a81e2d2fa8618851ce13d27d9845b56"
    },
    {
        "user_address": "0xcf7ea15b05576a8fe2c74b6d0d4f9415fff60027"
    },
    {
        "user_address": "0x094249008d4115a929241a1828af77003a80a7c5"
    },
    {
        "user_address": "0x196535fe7eab92489936d1b59417d674118cab1d"
    },
    {
        "user_address": "0x8523a69735810ccaa1b1b63c2395a355f8197426"
    },
    {
        "user_address": "0xe46a7b3a73696a1e39bf8ea739a501a75bfd9e53"
    },
    {
        "user_address": "0x785350324ad48bfe3aaaf9d85faec2d14ac7a9c6"
    },
    {
        "user_address": "0x49fdee3866583aef869c15ce4fe082bf97df34a6"
    },
    {
        "user_address": "0xa1048c1954d43802ce61b4209178d67d8c93a332"
    },
    {
        "user_address": "0x3054e730c3a28b60a391aa3919e77936cdfc5fe6"
    },
    {
        "user_address": "0xa477b146128b408d3c48fd46e61fc0b28026b1df"
    },
    {
        "user_address": "0xe152d0c399607ea5eba1e140646756c2e4e2414a"
    },
    {
        "user_address": "0xaa5733be742eb7d56c3b4e37d8c0e759ff305f14"
    },
    {
        "user_address": "0xbf600570f627c2b3e414c35bb8e05bf154d52cb3"
    },
    {
        "user_address": "0x08a8bd1f6f82e0ca42b6daf6cc4d6cc388cddc3c"
    },
    {
        "user_address": "0x3e5c4240cc214034298802a4f8d07875d229ab96"
    },
    {
        "user_address": "0x208ac3bccce4052babafc6cf7ba45dc15b3c8a90"
    },
    {
        "user_address": "0x571a88afaed28be3647427299cb3895628450aff"
    },
    {
        "user_address": "0x49b0ec8118a149c379095db7d7e12cc0722cbc70"
    },
    {
        "user_address": "0x0e6db06de32cb353435b73a3d381f59f2d96726a"
    },
    {
        "user_address": "0xc058c9a337f4db3367d765e86d224a4b30e825e4"
    },
    {
        "user_address": "0x2c087f81a7265e053cb3581849b875b364fbf787"
    },
    {
        "user_address": "0x859170f75ba4cd2ef97dfdebb1d2a98e446c1559"
    },
    {
        "user_address": "0xbd1187af7b213694b6abf2ed86666066faedb168"
    },
    {
        "user_address": "0x226fd38c0f592e6f196fe14245c5f222cd129941"
    },
    {
        "user_address": "0x1f7d75f3be991111992d84a299f647a8541debc1"
    },
    {
        "user_address": "0x50899015ce3227edeb3cc7ad8afff062f1ca66b2"
    },
    {
        "user_address": "0x7cce87434c4b32058478c7336b716c10d817f8d7"
    },
    {
        "user_address": "0xa46076cb15cc82c98fb230df89fdfa737b2e8a3d"
    },
    {
        "user_address": "0x893b7d2555d51bbe539b2a9a73c1c31f4a46b710"
    },
    {
        "user_address": "0x5df68a300a6885a0a1c8091485fb0b9eac66413a"
    },
    {
        "user_address": "0x968fb894fac28ddec28e46d1b7fbefec56f978b6"
    },
    {
        "user_address": "0x7d89019fbdf06925d6bae8f23016d1007210b76a"
    },
    {
        "user_address": "0x20ec1cc3947bb7b2da4ec1adb6cb32a9a239f786"
    },
    {
        "user_address": "0xa2958d04d307c5bff9bf19deac76dd7cb0996eb9"
    },
    {
        "user_address": "0x8c0efb8e7359bd49ad2f1ace0ad41d707428cdca"
    },
    {
        "user_address": "0x406d3ee484c3f290de5d40ca74d03996806ec10b"
    },
    {
        "user_address": "0x5e0d2d524adc73b21159090ae42147a76556bee7"
    },
    {
        "user_address": "0x38663f26076bdc95af6b52d50876fb9d2f4002cc"
    },
    {
        "user_address": "0x52afb047de4c0d2ee78ff486f19e09f53eb657d9"
    },
    {
        "user_address": "0x83ad7fc0ab216e9ad997528f46efd7441629b55c"
    },
    {
        "user_address": "0xaf69d7c89ae9a2258e824ff664aea7fd9d6a94b1"
    },
    {
        "user_address": "0xfd2b843f98b72b7c2be5c4df63f2a70e1170d642"
    },
    {
        "user_address": "0x87655aa9d2cc4f39ec1397c307dabe0ae4a96f04"
    },
    {
        "user_address": "0x3d824dd61d54a3da7c7d1e8798edc554f82edc01"
    },
    {
        "user_address": "0x35b673b0ca894e6d2a30720ab7c91c09358d3376"
    },
    {
        "user_address": "0xe0c71a9a0e0da032db9e7f4e03fc3eb7bde7facd"
    },
    {
        "user_address": "0xe8384dd403c5f91d7541d422b7841300e6c81be3"
    },
    {
        "user_address": "0xc149c8d97f2dd9961e3819089215bc5f6b910164"
    },
    {
        "user_address": "0xc10996cb5ac4c69b83f6e63dab097d5665afc012"
    },
    {
        "user_address": "0x3e0d7b7b8192f570c49d2af5efcd08dc7b402af0"
    },
    {
        "user_address": "0xbb9af8948e57c76dcdeec5b06cf264518167b37d"
    },
    {
        "user_address": "0x3a7404aa17189bb22cf0622dc965e889b1d8dbf5"
    },
    {
        "user_address": "0x7ec793d9e96f075de4b18bf8cb5c95c0386220f9"
    },
    {
        "user_address": "0x884dec8b01d130708005626e552cf1e8dd1ba68a"
    },
    {
        "user_address": "0x2d169a5a828cf89b3f4341e4d7685397ba575f26"
    },
    {
        "user_address": "0xd46f22005c83e68c2c07225161bf219520590902"
    },
    {
        "user_address": "0x69117f459dd567e36a530178c6151c9493bc8535"
    },
    {
        "user_address": "0xd0419008028f8fb9f03c90f2a4f0238c39feeec4"
    },
    {
        "user_address": "0x6315be6e59af79a43df019bebc01ce6bd0d397ba"
    },
    {
        "user_address": "0xeae01c0222ccd43c821613fc6c67cac2b7979479"
    },
    {
        "user_address": "0x2fd285f6332dd361309030d99267f9f820cfe918"
    },
    {
        "user_address": "0x3bc40c80cbf368ef8a22135c508694427d9273a5"
    },
    {
        "user_address": "0x813491c00acd4d3ccba1ea8460fea08dd3d71001"
    },
    {
        "user_address": "0xe0573267d47088b6f6fe3e4d05b04432b193cce6"
    },
    {
        "user_address": "0xcc5bbcb1ae87c535a9a57264c46c12f68eb50d92"
    },
    {
        "user_address": "0x0b2ab1c727094a2b196014b9b0b0392478b06cf8"
    },
    {
        "user_address": "0xc2f04a24865153f51d87e338c6cdc30bfd402ad9"
    },
    {
        "user_address": "0x32b14f04f471e319a3c04014256f1a0f49cc6ba6"
    },
    {
        "user_address": "0xec2ec8d5785ee9eef2f4d3127197fa858fb86c12"
    },
    {
        "user_address": "0xae6fe81ba5b5eaeaa3b7ed702ab805f02b70590c"
    },
    {
        "user_address": "0xd969213538370b3520f93aa2412e51b6d69f8590"
    },
    {
        "user_address": "0x3e054d75ae350554ef8c0736d8619a68c318f138"
    },
    {
        "user_address": "0x0774bfbc7da590bc05fa026f0fb2bb8138e7d551"
    },
    {
        "user_address": "0x4f0410a30600aab6d7d2aedeadaae0f7205fe100"
    },
    {
        "user_address": "0xf3b7517db4c9fd34ffb88eb167c160ff366c5888"
    },
    {
        "user_address": "0xb8c6141c865fe44c9ba58ee98007105efd614199"
    },
    {
        "user_address": "0xa3767fe168f6684cd03d86b4000b340a011f6142"
    },
    {
        "user_address": "0x372b4d1fb75f654b40b8ba2370b68b2378985a77"
    },
    {
        "user_address": "0x1d4dd055825f9ea65ee22703d89703c9e6f8d46c"
    },
    {
        "user_address": "0xa2aa0f0283fda519f27ebfd16abf39bf7ce87f37"
    },
    {
        "user_address": "0xd681f692f5b139313e4ff7b82638e045862eaffd"
    },
    {
        "user_address": "0x8139c4201e3000902a032cbd8ef7eed3f85e4bd8"
    },
    {
        "user_address": "0xbb0932d5dc13972deff9d32868593e29f2de391c"
    },
    {
        "user_address": "0x3e394788f9a3e54173ce2c8515952d8b1347c6d6"
    },
    {
        "user_address": "0xd05e0c467ff26b78c40aecb6bbb31dca006c1c98"
    },
    {
        "user_address": "0x6dade7f64ea59dda347f23de710e95d9d17a8793"
    },
    {
        "user_address": "0xe047ffccdcfce2635a16ceb933a536dbedc82128"
    },
    {
        "user_address": "0xfaf64671ae1facbd3a622cc8b6a0b8c634014f89"
    },
    {
        "user_address": "0x5177a1fb4e7f27359484f9d471edad693470e4ac"
    },
    {
        "user_address": "0xbc9f94379550226984d27f2d50d0cc7efcd7bcd6"
    },
    {
        "user_address": "0x547e6fbd153e722393d3bbda979edd424c6e8b70"
    },
    {
        "user_address": "0x28269ac8c484aa5936fe1dea3fad259d2750546a"
    },
    {
        "user_address": "0x8c52e7adbc8576ece4142445c1671d885ade7d17"
    },
    {
        "user_address": "0xf34a975c5fded0dc114ef4dda441e0fd36527d34"
    },
    {
        "user_address": "0x52c441a76415aa1dd0255c36c83f7668c9430a7a"
    },
    {
        "user_address": "0x352ef2b9f6ebf35e11a91876afcaae3eea7d07df"
    },
    {
        "user_address": "0xc9a931f458a5fc345ec7607197b19acc599ba0ae"
    },
    {
        "user_address": "0xbc1fd56fca3f31b8bd8f6e025e3ac5f6283fafc3"
    },
    {
        "user_address": "0x69f173f414e88a49b0e5ae19a1907e1091a4f802"
    },
    {
        "user_address": "0x75fbbfa8a94373227e25793073bfe970e0c9dce7"
    },
    {
        "user_address": "0x8327a5e643fba207c1b222ab8a1a2ee79c038651"
    },
    {
        "user_address": "0xe2789ec138bb358cc593162c73ffa71a34f035d6"
    },
    {
        "user_address": "0x77efaf43567ca9fecd5059a79c2ffc29ec9342e3"
    },
    {
        "user_address": "0xcea869e20d1fe13650c70e632d087f89682b73de"
    },
    {
        "user_address": "0x2166850904d2f76670df579e595ef6d41f1071df"
    },
    {
        "user_address": "0xb0fe0cfde89770ba8030ccc09e07b8ea3097a812"
    },
    {
        "user_address": "0x6481b39be67a189c25ab957ecf6602252b624253"
    },
    {
        "user_address": "0x43773a5d4c4b3e2e89e040c4bf8d90e8568515c0"
    },
    {
        "user_address": "0x35892212810408303380a0b3bcbcf5d429c75493"
    },
    {
        "user_address": "0x90a36962898ff11b8fbbdcbe7aa242e7c2d3e802"
    },
    {
        "user_address": "0x7e75491955864c1296b4c5853cdcd423dc8c3d63"
    },
    {
        "user_address": "0xbbb4b0dc3333fe6921c56da631dca25052523c72"
    },
    {
        "user_address": "0x95d6fb5958af7781dc7c4e8288f21c77709fd540"
    },
    {
        "user_address": "0x65a05e8161ae1b01e7780a0379f0559ff6c07060"
    },
    {
        "user_address": "0x55f5c06c8cb0a02d35229edf6c00a7a6ec54d973"
    },
    {
        "user_address": "0xa76953f013e5aae9725d14f4ab3e7def15bfa367"
    },
    {
        "user_address": "0x9e78c999f215cc1bcb3ee4660faae5c2277d255e"
    },
    {
        "user_address": "0xe7f2cbb4ad9666435aa24988542509b53a51ddb0"
    },
    {
        "user_address": "0x8e3e72bc962b72b64d17cc5b60ee38ef5ab0a2cc"
    },
    {
        "user_address": "0x0d8915fa7b130cd330505e96d1697492b8db75e8"
    },
    {
        "user_address": "0xc73c663f45bde0e1016bff26356b231f243cc78b"
    },
    {
        "user_address": "0x2de228dc1cf19c0a981117717738dccb77daac41"
    },
    {
        "user_address": "0x310c3a45796284be0d6b9af80cf33dfec901b076"
    },
    {
        "user_address": "0x9fd5afe6e1d88e71739b3085e87ee39b3b06ef14"
    },
    {
        "user_address": "0x6f9a78ec12f269418a85bf5d8254062119ed928a"
    },
    {
        "user_address": "0x13065d9359677b5c05ba7162a01a3bcb6890643c"
    },
    {
        "user_address": "0x2603629ffa327c8b71144b6d19036f77180861f6"
    },
    {
        "user_address": "0xccce2f40a55e84a35acd2495989a1f6110be0055"
    },
    {
        "user_address": "0xe13d961f7609a9f30fee8a6ae0183d9893c3e7bd"
    },
    {
        "user_address": "0x33d0c18800cbf2daec7a1b543d2e685f1e8abee0"
    },
    {
        "user_address": "0x6f3a89658e25e68a0a1a13445f7b90c13b3b5f24"
    },
    {
        "user_address": "0xcfec0d6142e983b96a03055284cbe4296330be1d"
    },
    {
        "user_address": "0x656db657e8aa6b21912bda745a09c88311a72ff4"
    },
    {
        "user_address": "0xe51126529ea400585400033fa32d9c43ac5f03da"
    },
    {
        "user_address": "0xa131177cbec70ef4e643c46b6eaa847598f29e26"
    },
    {
        "user_address": "0x1eff6a7a72616e9b7c02c7869bef1af9e38acd9f"
    },
    {
        "user_address": "0xadcde8218942a374152001e6b52a15e61e73be27"
    },
    {
        "user_address": "0x4abe3dbe0ace5573d45912a5d5b78938a39a8ea6"
    },
    {
        "user_address": "0x387ff96f2af7d5c0ac676c7f0102d414cf217fbd"
    },
    {
        "user_address": "0xf199c404ba89ee0b0bf98e4e14a77da3878198ee"
    },
    {
        "user_address": "0xe6574cf252d384a9bb232c0514a63b46c6bf6114"
    },
    {
        "user_address": "0xedd9a40baefe670362f4bc9d72a48449352ce381"
    },
    {
        "user_address": "0xc7be27e719c01826773ec41b6c73c987046db042"
    },
    {
        "user_address": "0x248d334905da8911aaebcf68f716c4188b70aef0"
    },
    {
        "user_address": "0x1d4ea7c5f223d78f06c53caaf16685c30893131a"
    },
    {
        "user_address": "0xd52db5e5e07a1ce698e82e03646e0dab79ecccc2"
    },
    {
        "user_address": "0xb2fc548bdb58b6fac82151c6296e6d2d517331e9"
    },
    {
        "user_address": "0x1427704e2d8bc59ae043c2544725121bc72f2a82"
    },
    {
        "user_address": "0x6127541f24d0da9c944226fece64e3a767e61b3a"
    }
]
console.log(userList.length)
const Web3 = require('web3').Web3;
const fs = require('fs');
const rpcUrl = require('../config.json').FULL_RPC_URL;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const block = 687667; // July-01-2023 00:00:18 UTC

const httpProvider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(httpProvider);

const outputFile = 'user_balances_at_block_' + block + '.csv';
const totalAddresses = userList.length;
const concurrency = 5;

// 设置CSV文件输出路径和标题
const csvWriter = createCsvWriter({
    path: outputFile,
    header: [
        { id: 'user_address', title: 'User Address' },
        { id: 'balance', title: 'Balance' }
    ]
});

// 异步函数用于查询每个地址的余额
async function fetchBalances(index) {
    const user = userList[index]
    const balances = [];
    const balance = await web3.eth.getBalance(user.user_address, block);
    balances.push({ user_address: user.user_address, balance: balance });
    // 将余额数据写入CSV文件
    csvWriter.writeRecords(balances)
        .then(() => console.log('CSV ', index, ' file has been created successfully.'));
    // 继续请求下一页数据
    if (index + concurrency < totalAddresses) {
        fetchBalances(index + concurrency);
    }
}

// 清空或创建输出文件
fs.writeFileSync(outputFile, '');
console.log('任务开始，时间：',new Date())
// 开始发起第一页的请求（创建五个并发）
for (let i=0; i< concurrency; i++){
    fetchBalances(i);
}
