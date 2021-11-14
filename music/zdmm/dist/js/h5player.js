(function () {
    // 'use strict';
    // //播放器句柄

    var Hlib = function () {};

    var zdmmList = [];
    var VideoListJson = [
        ['FLV文件', ['第1部 第01集$http://fdfs.xmcdn.com/group10/M0A/0C/53/wKgDZ1Vhq3zzv9fuAEG4tPqh-ZA709.m4a$flv', '第1部 第02集$http://fdfs.xmcdn.com/group6/M02/82/D4/wKgDhFT-zd6gMwkqAJ9GDQ30_oM302.mp3$flv', '第1部 第03集$http://fdfs.xmcdn.com/group6/M04/86/B6/wKgDg1T-zmqTk1fwAKClEgvR0SA325.mp3$flv', '第1部 第04集$http://fdfs.xmcdn.com/group6/M08/86/8E/wKgDhFUAIFKTt1R8AJal41YWUBM364.mp3$flv', '第1部 第05集$http://fdfs.xmcdn.com/group7/M05/10/43/wKgDWlVlfTeAmBXBADvILNL0HGk877.m4a$flv', '第1部 第06集$http://fdfs.xmcdn.com/group6/M00/8A/77/wKgDg1UAIR_R8bSzALU_XJ7Fjz0361.mp3$flv', '第1部 第07集$http://fdfs.xmcdn.com/group8/M00/0C/6E/wKgDYVVhtfDCOxQdADvNKgie3Hg438.m4a$flv', '第1部 第08集$http://fdfs.xmcdn.com/group6/M0A/8F/25/wKgDg1UBjw_zORO3AJVTHUkJTOE837.mp3$flv', '第1部 第09集$http://fdfs.xmcdn.com/group6/M07/8B/37/wKgDhFUBj5GzNwtjAKElPHssMEA590.mp3$flv', '第1部 第10集$http://fdfs.xmcdn.com/group8/M06/1B/A6/wKgDYVV2se7ics_tAJfLUzCgafs116.m4a$flv', '第1部 第11集$http://fdfs.xmcdn.com/group6/M07/8B/E7/wKgDhFUBu-yCn6s2AJ5RJ90oh94741.mp3$flv', '第1部 第12集$http://fdfs.xmcdn.com/group6/M09/8F/DC/wKgDg1UBvDPgvZXZAJbJzqcKK1E220.mp3$flv', '第1部 第13集$http://fdfs.xmcdn.com/group14/M0A/10/25/wKgDZFVlonKgkIckAD-xrwER_J8411.m4a$flv', '第1部 第14集$http://fdfs.xmcdn.com/group6/M01/9B/E1/wKgDhFUG4tSwam6-ALP7R1pDTqA086.mp3$flv', '第1部 第15集$http://fdfs.xmcdn.com/group11/M05/1B/BA/wKgDa1V2so3Srz6sAJj1AdyMJN4472.m4a$flv', '第1部 第16集$http://fdfs.xmcdn.com/group6/M09/9F/C4/wKgDg1UG45vD2GyFAJd681XQH_8222.mp3$flv', '第1部 第17集$http://fdfs.xmcdn.com/group6/M0B/9F/C6/wKgDg1UG4-XTs5F5AJM5-A6h8M4332.mp3$flv', '第1部 第18集$http://fdfs.xmcdn.com/group6/M05/9F/CC/wKgDg1UG5KXQUHVXAMhhUbwKis0148.mp3$flv', '第1部 第19集$http://fdfs.xmcdn.com/group6/M04/9B/EC/wKgDhFUG5Pej1VeMAKxmDVCJZGg441.mp3$flv', '第1部 第20集$http://fdfs.xmcdn.com/group6/M0A/9F/CF/wKgDg1UG5V6TqbwjAKHtPBB4_9g083.mp3$flv', '第1部 第21集$http://fdfs.xmcdn.com/group6/M04/9F/D1/wKgDg1UG5cfA5BsXAJq4VsywWr0723.mp3$flv', '第1部 第22集$http://fdfs.xmcdn.com/group6/M0B/A3/04/wKgDg1UH8FnipOCVAJfqyb2BGbk247.mp3$flv', '第1部 第23集$http://fdfs.xmcdn.com/group8/M06/1D/F6/wKgDYFV5Rp7DlcPFAKhjNoDyCwE747.m4a$flv', '第1部 第24集$http://fdfs.xmcdn.com/group6/M09/A3/08/wKgDg1UH8WiiqNFAAKLhUT8ejSs876.mp3$flv', '第1部 第25集$http://fdfs.xmcdn.com/group6/M0A/A8/1F/wKgDg1UJSQaTCo9xAJSslRQ3jgw256.mp3$flv', '第1部 第26集$http://fdfs.xmcdn.com/group6/M07/A4/35/wKgDhFUJSWzS_Lf_AJwGN51Geug384.mp3$flv', '第1部 第27集$http://fdfs.xmcdn.com/group6/M0B/A8/22/wKgDg1UJSeySeJWmAKINEsZPM4Y828.mp3$flv', '第1部 第28集$http://fdfs.xmcdn.com/group6/M09/AC/DB/wKgDg1UKjyKCXJLMAMBWizxEvkE447.mp3$flv', '第1部 第29集$http://fdfs.xmcdn.com/group6/M05/A8/F2/wKgDhFUKj5LzzlAkAJ17R6QvGHY275.mp3$flv', '第1部 第30集$http://fdfs.xmcdn.com/group6/M04/A8/F4/wKgDhFUKkAbDPRalAKwvXET-pvY633.mp3$flv', '第1部 第31集$http://fdfs.xmcdn.com/group6/M00/AC/DC/wKgDhFUL3K-AYfyeAJjV47QluSY848.mp3$flv', '第1部 第32集$http://fdfs.xmcdn.com/group6/M02/B0/CB/wKgDg1UL3QCgJre0AJ2fMm_CmJc689.mp3$flv', '第1部 第33集$http://fdfs.xmcdn.com/group6/M05/AC/E0/wKgDhFUL3Zrh7lMVAJsutF0tyno123.mp3$flv', '第1部 第34集$http://fdfs.xmcdn.com/group15/M0A/1D/95/wKgDaFV4YQbBJqtqAK9g_Hl020o524.m4a$flv', '第1部 第35集$http://fdfs.xmcdn.com/group6/M02/B5/13/wKgDg1UNPc-DZZ8yAJrAgFZA4e4155.mp3$flv', '第1部 第36集$http://fdfs.xmcdn.com/group6/M01/B1/21/wKgDhFUNPmewN4PcAJ-lkP-SgOM324.mp3$flv', '第1部 第37集$http://fdfs.xmcdn.com/group13/M02/1D/5E/wKgDXlV4HUXTJQpYAJgQRLgRSoE610.m4a$flv', '第1部 第38集$http://fdfs.xmcdn.com/group13/M0A/10/5E/wKgDXlVlo66xdO35ADLnKjf208Y410.m4a$flv', '第2部 第01集$http://fdfs.xmcdn.com/group6/M00/B6/DE/wKgDhFUO_D7CjXECAJ-SyREm40Q789.mp3$flv', '第2部 第02集$http://fdfs.xmcdn.com/group6/M06/B9/8B/wKgDhFUP85ugf_FDAKSaIhKvHIA568.mp3$flv', '第2部 第03集$http://fdfs.xmcdn.com/group6/M01/B9/8E/wKgDhFUP9DTx3VPjAKgFPJwTIZ8991.mp3$flv', '第2部 第04集$http://fdfs.xmcdn.com/group6/M00/BD/8B/wKgDg1UP9IzRpxTjAKrxzvh5a0Y421.mp3$flv', '第2部 第05集$http://fdfs.xmcdn.com/group6/M08/BD/9D/wKgDhFURTBuQyDs5AJ6hJwDCeig453.mp3$flv', '第2部 第06集$http://fdfs.xmcdn.com/group6/M0A/BD/A0/wKgDhFURTL3yIN27AK2bcA95L1k056.mp3$flv', '第2部 第07集$http://fdfs.xmcdn.com/group6/M05/BD/A1/wKgDhFURTRmj3oVyALpRUbE2usE122.mp3$flv', '第2部 第08集$http://fdfs.xmcdn.com/group6/M03/C6/17/wKgDg1USr_ij3VNtAJ3jxHZD3yQ152.mp3$flv', '第2部 第09集$http://fdfs.xmcdn.com/group6/M01/C6/1A/wKgDg1USsGLRIm6mAJvjHQDMMFY120.mp3$flv', '第2部 第10集$http://fdfs.xmcdn.com/group6/M08/C2/15/wKgDhFUSsOzQegW2AJhmDW7iVs4370.mp3$flv', '第2部 第11集$http://fdfs.xmcdn.com/group6/M09/C9/71/wKgDg1UT7MqC8O_vAKWvryUDjF4104.mp3$flv', '第2部 第12集$http://fdfs.xmcdn.com/group6/M02/C5/6D/wKgDhFUT7cWBvejOAKDgqqEMUmI829.mp3$flv', '第2部 第13集$http://fdfs.xmcdn.com/group6/M06/C9/7A/wKgDg1UT7w-x8gRrAKHTHa1e2xM516.mp3$flv', '第2部 第14集$http://fdfs.xmcdn.com/group6/M01/CD/E4/wKgDg1UVTyeQe56xAKVggOVk2mY946.mp3$flv', '第2部 第15集$http://fdfs.xmcdn.com/group13/M05/1D/60/wKgDXlV4Hh_y5VrvAK6GVAQeDdc386.m4a$flv', '第2部 第16集$http://fdfs.xmcdn.com/group6/M0A/CE/3B/wKgDg1UVX2ShLRStAKu9EkQMvFw555.mp3$flv', '第2部 第17集$http://fdfs.xmcdn.com/group14/M0A/0C/8E/wKgDZFVh47WzJy0nAEfdkMjjzuw760.m4a$flv', '第2部 第18集$http://fdfs.xmcdn.com/group12/M08/1D/3D/wKgDW1V4YlHDdkJqALScKb3HgFU002.m4a$flv', '第2部 第19集$http://fdfs.xmcdn.com/group6/M01/CC/AB/wKgDhFUWZu7S88j2AJyTcIh5Si0804.mp3$flv', '第2部 第20集$http://fdfs.xmcdn.com/group12/M01/1E/00/wKgDW1V5SM6wop_xAK-UR7yYft8321.m4a$flv', '第2部 第21集$http://fdfs.xmcdn.com/group6/M04/D4/BA/wKgDg1UXwCDh3nYIAKjYqsM8hMs740.mp3$flv', '第2部 第22集$http://fdfs.xmcdn.com/group6/M0B/D4/BC/wKgDg1UXwJbAF3AcAJ2wVt0O2HY975.mp3$flv', '第2部 第23集$http://fdfs.xmcdn.com/group6/M00/D9/6C/wKgDg1UZKuOBIqUhAJ2x-EwXHQU922.mp3$flv', '第2部 第24集$http://fdfs.xmcdn.com/group10/M04/0E/7B/wKgDaVVkK8SBUcbOAEQHf3PK8Wo254.m4a$flv', '第2部 第25集$http://fdfs.xmcdn.com/group6/M0A/D9/71/wKgDg1UZK-bB0QqqALAetKdv0PY864.mp3$flv', '第2部 第26集$http://fdfs.xmcdn.com/group13/M03/1C/E8/wKgDXVV3zbaQlCd_ALRIpKawxF0369.m4a$flv', '第2部 第27集$http://fdfs.xmcdn.com/group6/M07/D9/88/wKgDhFUafLXT6nc6AK_BpfcJgw4234.mp3$flv', '第2部 第28集$http://fdfs.xmcdn.com/group6/M09/DD/B0/wKgDg1Uafm3S7ujWAK2EleFZrnw692.mp3$flv', '第2部 第29集$http://fdfs.xmcdn.com/group8/M0A/0F/90/wKgDYVVlJg6jQ_0RAD5AMC3j8oU737.m4a$flv', '第2部 第30集$http://fdfs.xmcdn.com/group6/M03/E1/BC/wKgDg1Ub1DvwLo4CAKNwLThs-28037.mp3$flv', '第2部 第31集$http://fdfs.xmcdn.com/group12/M09/1C/E4/wKgDW1V4HySiloHiAKiTn4FPcdE906.m4a$flv', '第2部 第32集$http://fdfs.xmcdn.com/group6/M03/E1/32/wKgDhFUdGQKjmvwwALHCTOsfVVc564.mp3$flv', '第2部 第33集$http://fdfs.xmcdn.com/group6/M00/E5/50/wKgDg1UdGg3T0lCOAKtbHb56ZCA553.mp3$flv', '第2部 第34集$http://fdfs.xmcdn.com/group16/M04/1C/A7/wKgDbFV3zguREzsVALTbPCjZXcI823.m4a$flv', '第2部 第35集$http://fdfs.xmcdn.com/group6/M05/E9/0E/wKgDg1UeXoDQgYK5AKcI_RRTTZg908.mp3$flv', '第2部 第36集$http://fdfs.xmcdn.com/group6/M04/E4/F5/wKgDhFUeXxjibT1YAKADcDnjao4184.mp3$flv', '第2部 第37集$http://fdfs.xmcdn.com/group6/M0A/E4/F7/wKgDhFUeX3bjVfOLAKNoAxWzvhw383.mp3$flv', '第2部 第38集$http://fdfs.xmcdn.com/group6/M00/E9/66/wKgDhFUfwdvBLShaAKdQ1K-U1iE251.mp3$flv', '第2部 第39集$http://fdfs.xmcdn.com/group6/M09/ED/74/wKgDg1UfwjHgE1NzAJ0HXFtyS_w960.mp3$flv', '第2部 第40集$http://fdfs.xmcdn.com/group11/M0B/1D/B3/wKgDa1V4pyKxZuifAKO5LgJmhRs572.m4a$flv', '第2部 第41集$http://fdfs.xmcdn.com/group7/M0A/1D/61/wKgDWlV4H_GCC-J9ALQ7QQ2olgw328.m4a$flv', '第2部 第42集$http://fdfs.xmcdn.com/group6/M03/F1/92/wKgDg1UhIuqQX5NwAK1NEpnx2Gg657.mp3$flv', '第2部 第43集$http://fdfs.xmcdn.com/group6/M02/F1/84/wKgDg1UhH9KBBToxAP1VPPnfy8c772.mp3$flv', '第3部 第01集$http://fdfs.xmcdn.com/group6/M07/F9/0E/wKgDg1UiZZ2CeWjhAKwZUVcghaY407.mp3$flv', '第3部 第02集$http://fdfs.xmcdn.com/group6/M08/F5/19/wKgDhFUiZiCRgz3vAKoF48x2s-Q788.mp3$flv', '第3部 第03集$http://fdfs.xmcdn.com/group6/M0A/F9/2B/wKgDg1UiZq_TOFvSAKeTxOn1epU683.mp3$flv', '第3部 第04集$http://fdfs.xmcdn.com/group6/M03/01/2B/wKgDg1UjwdqxW-1gALOE6SOuiR4855.mp3$flv', '第3部 第05集$http://fdfs.xmcdn.com/group13/M0A/1D/49/wKgDXVV4ICGx55ZkAKEYDiYU7lQ902.m4a$flv', '第3部 第06集$http://fdfs.xmcdn.com/group7/M09/0E/21/wKgDWlVjs7awaL-qAD1TbAxJ_vI583.m4a$flv', '第3部 第07集$http://fdfs.xmcdn.com/group6/M0B/06/35/wKgDg1UlDQeQKlQRALI7HR7AUvQ439.mp3$flv', '第3部 第08集$http://fdfs.xmcdn.com/group7/M07/1C/FC/wKgDWlV3zvaDu9kKAJ2pNmEThxs183.m4a$flv', '第3部 第09集$http://fdfs.xmcdn.com/group6/M03/06/45/wKgDg1UlD3zTo1u7AKNgqpG0KB8281.mp3$flv', '第3部 第10集$http://fdfs.xmcdn.com/group6/M03/0B/9B/wKgDg1UmWH6RRLvcAKXuiw6DUHo662.mp3$flv', '第3部 第11集$http://fdfs.xmcdn.com/group6/M01/0B/9D/wKgDg1UmWO_x6oOIAKifhWscd-0181.mp3$flv', '第3部 第12集$http://fdfs.xmcdn.com/group6/M06/07/A5/wKgDhFUmWWjxsNcMAKLIAxusQ00767.mp3$flv', '第3部 第13集$http://fdfs.xmcdn.com/group6/M00/10/19/wKgDg1UnW7eAnshUAKY9ugzItv8709.mp3$flv', '第3部 第14集$http://fdfs.xmcdn.com/group6/M01/0C/3C/wKgDhFUnXWGiai9qAK1j7v9uPeY625.mp3$flv', '第3部 第15集$http://fdfs.xmcdn.com/group6/M02/0C/4C/wKgDhFUnX4ix9afLALfBzoGJxzg802.mp3$flv', '第3部 第16集$http://fdfs.xmcdn.com/group16/M08/0C/B3/wKgDbFVh582DxAmLAD-NS_BOWeI295.m4a$flv', '第3部 第17集$http://fdfs.xmcdn.com/group6/M05/10/34/wKgDg1UnX2OiGbrMAMbTxJpjrkg117.mp3$flv', '第3部 第18集$http://fdfs.xmcdn.com/group8/M03/1D/98/wKgDYVV4p_iC_HmLAL9TWv9HrZo840.m4a$flv', '第3部 第19集$http://fdfs.xmcdn.com/group6/M01/17/87/wKgDhFUqSCfBRA-UAKkXhWB6I5k116.mp3$flv', '第3部 第20集$http://fdfs.xmcdn.com/group6/M0A/17/89/wKgDhFUqSLyy50tqAKhA1E9C9jk581.mp3$flv', '第3部 第21集$http://fdfs.xmcdn.com/group16/M06/0E/B8/wKgDalVkWJqCbGLYAEZPOYbxKJg726.m4a$flv', '第3部 第22集$http://fdfs.xmcdn.com/group11/M08/1C/62/wKgDa1V3S4yy5eCtALKTVHkaf6E287.m4a$flv', '第3部 第23集$http://fdfs.xmcdn.com/group13/M0B/1C/35/wKgDXVV29aSCCTipAKCuWYG0rQo850.m4a$flv', '第3部 第24集$http://fdfs.xmcdn.com/group6/M09/21/9F/wKgDg1UrshrRTQykAJ5aItQMv7U466.mp3$flv', '第3部 第25集$http://fdfs.xmcdn.com/group9/M00/1D/16/wKgDYlV4IjegbfL-AMcxJvZS2Kk837.m4a$flv', '第3部 第26集$http://fdfs.xmcdn.com/group6/M02/27/E7/wKgDg1Us8vHhWDVEAKnqIoVlHyk329.mp3$flv', '第3部 第27集$http://fdfs.xmcdn.com/group6/M00/27/F1/wKgDg1Us9PvAE3O6AKSMQSPLYlQ782.mp3$flv', '第3部 第28集$http://fdfs.xmcdn.com/group6/M00/39/AD/wKgDg1UwsjKy-5aeAKA_2cLaI3A355.mp3$flv', '第3部 第29集$http://fdfs.xmcdn.com/group6/M06/34/83/wKgDg1Uvj6yDZfRLAKXf2Xn16RM683.mp3$flv', '第3部 第30集$http://fdfs.xmcdn.com/group6/M06/34/84/wKgDg1Uvj9fwydciAJdS8-e9WtM602.mp3$flv', '第3部 第31集$http://fdfs.xmcdn.com/group6/M08/30/8B/wKgDhFUvkCfjTWIrAKTNkBnTBwI531.mp3$flv', '第3部 第32集$http://fdfs.xmcdn.com/group6/M02/34/86/wKgDg1UvkDHzMDBvAKRfXFLCF1s898.mp3$flv', '第3部 第33集$http://fdfs.xmcdn.com/group6/M0B/34/89/wKgDg1UvkK-BJuQ5ANgIqtqXt4E712.mp3$flv', '第3部 第34集$http://fdfs.xmcdn.com/group6/M0A/30/8E/wKgDhFUvkKewfsacAKaaydhnkIU371.mp3$flv', '第3部 第35集$http://fdfs.xmcdn.com/group6/M05/36/A9/wKgDhFUw5u6QR20JAJ5xzm1hJOc586.mp3$flv', '第3部 第36集$http://fdfs.xmcdn.com/group6/M08/36/AA/wKgDhFUw5xuAyOMSAJdKyXRqGyE613.mp3$flv', '第3部 第37集$http://fdfs.xmcdn.com/group12/M01/0D/D5/wKgDXFVjtlGxX3EwAEMuF932F44382.m4a$flv', '第3部 第38集$http://fdfs.xmcdn.com/group6/M0B/3F/EA/wKgDg1UyETrCe5oGAKjyycZj3gU689.mp3$flv', '第3部 第39集$http://fdfs.xmcdn.com/group6/M0B/3F/ED/wKgDg1UyEXKwyL1kAJz77ifs6wk304.mp3$flv', '第3部 第40集$http://fdfs.xmcdn.com/group6/M02/3F/EF/wKgDg1UyEb_yLi2QAKGklcAD4tM918.mp3$flv', '第3部 第41集$http://fdfs.xmcdn.com/group6/M01/43/1C/wKgDhFUzjmmixydeAJ1KTP8u5Uk733.mp3$flv', '第3部 第42集$http://fdfs.xmcdn.com/group6/M02/47/1E/wKgDg1UzjpyCrAnWAH4FZkOcZXc564.mp3$flv', '第4部 第01集$http://fdfs.xmcdn.com/group6/M05/4D/56/wKgDg1U06U3hw5_tAJmkazzPeVM588.mp3$flv', '第4部 第02集$http://fdfs.xmcdn.com/group6/M07/4D/57/wKgDg1U06YmjGV7GAK1Ua-nNVbA517.mp3$flv', '第4部 第03集$http://fdfs.xmcdn.com/group6/M06/49/4D/wKgDhFU06cWwqjmYAJtsv5x4URE998.mp3$flv', '第4部 第04集$http://fdfs.xmcdn.com/group6/M02/53/37/wKgDg1U2OkugpIIEAJlSydTX48k194.mp3$flv', '第4部 第05集$http://fdfs.xmcdn.com/group6/M0B/53/39/wKgDg1U2OpuTOTI7AJ8HMuuXQnY984.mp3$flv', '第4部 第06集$http://fdfs.xmcdn.com/group6/M03/4F/35/wKgDhFU2Ow2gaZbTAKqg_ZrUsxA697.mp3$flv', '第4部 第07集$http://fdfs.xmcdn.com/group6/M07/58/BC/wKgDg1U3hTqTMn1HAKfIA9r3h1Q305.mp3$flv', '第4部 第08集$http://fdfs.xmcdn.com/group6/M0B/58/BD/wKgDg1U3hVuR6a0uAJIOYZlCU1E747.mp3$flv', '第4部 第09集$http://fdfs.xmcdn.com/group10/M04/0F/44/wKgDaVVk25_BmoMBADxeKhGsGfk624.m4a$flv', '第4部 第10集$http://fdfs.xmcdn.com/group6/M06/5E/12/wKgDg1U4wmHyuN3eAJiHhXjlnIE114.mp3$flv', '第4部 第11集$http://fdfs.xmcdn.com/group6/M0A/5A/12/wKgDhFU4woHicw2vAJGyIothxrU519.mp3$flv', '第4部 第12集$http://fdfs.xmcdn.com/group9/M02/0C/D8/wKgDYlViGQXwFyJ5AEBqbj75x44152.m4a$flv', '第4部 第13集$http://fdfs.xmcdn.com/group6/M00/63/AC/wKgDg1U6MBaiKFWaAJsjR22QXA0470.mp3$flv', '第4部 第14集$http://fdfs.xmcdn.com/group6/M01/63/AE/wKgDg1U6MHqznM0yAJdidgFA4RQ012.mp3$flv', '第4部 第15集$http://fdfs.xmcdn.com/group15/M00/0E/B0/wKgDaFVkMKbyU6r3ADryUHyZyP0829.m4a$flv', '第4部 第16集$http://fdfs.xmcdn.com/group6/M03/65/51/wKgDhFU7uBWjI5aNAKDXrytUO7o533.mp3$flv', '第4部 第17集$http://fdfs.xmcdn.com/group6/M07/65/52/wKgDhFU7uFXRmnOEAKAwVg2YXrs967.mp3$flv', '第4部 第18集$http://fdfs.xmcdn.com/group6/M07/65/52/wKgDhFU7uI2h1zorAJ0rR-hKoZQ910.mp3$flv', '第4部 第19集$http://fdfs.xmcdn.com/group6/M0B/6C/C4/wKgDg1U82YiA6xrgAKbVkFI8V_0748.mp3$flv', '第4部 第20集$http://fdfs.xmcdn.com/group6/M09/6C/C6/wKgDg1U82d3xZi3_AKKoLaIsh7U152.mp3$flv', '第4部 第21集$http://fdfs.xmcdn.com/group6/M0A/68/C8/wKgDhFU82hyjVgr8AKsXXPb2hP8808.mp3$flv', '第4部 第22集$http://fdfs.xmcdn.com/group6/M09/71/EC/wKgDg1U-JBHQecoMALXDmtF3zb4731.mp3$flv', '第4部 第23集$http://fdfs.xmcdn.com/group6/M06/6D/E6/wKgDhFU-JFyCe2fyAKMVkEOCcyE292.mp3$flv', '第4部 第24集$http://fdfs.xmcdn.com/group6/M06/6D/E7/wKgDhFU-JHSTyP9jAJp_MgyKbGM916.mp3$flv', '第4部 第25集$http://fdfs.xmcdn.com/group6/M07/76/CB/wKgDg1U_gUOxkFKbALfJJ_6SJII736.mp3$flv', '第4部 第26集$http://fdfs.xmcdn.com/group6/M04/72/DD/wKgDhFU_gYyjYX0GAJ7qn1EBl20160.mp3$flv', '第4部 第27集$http://fdfs.xmcdn.com/group6/M0B/76/CD/wKgDg1U_gZyQqo0wAKCCyRm7o2Q637.mp3$flv', '第4部 第28集$http://fdfs.xmcdn.com/group6/M07/7C/06/wKgDg1VA7_vSOdY_AJu8v-RSS7I155.mp3$flv', '第4部 第29集$http://fdfs.xmcdn.com/group6/M07/7C/06/wKgDg1VA8ATAk6k2AJ0ZUfww4GA562.mp3$flv', '第4部 第30集$http://fdfs.xmcdn.com/group6/M05/7C/07/wKgDg1VA8FqDVp68AKuNulT-WUI991.mp3$flv', '第4部 第31集$http://fdfs.xmcdn.com/group6/M0B/7F/75/wKgDg1VCGPLg7v2-AKl0ld6HjXo123.mp3$flv', '第4部 第32集$http://fdfs.xmcdn.com/group16/M0A/0C/E6/wKgDalViGbGCs7ZQAEYekOkMVA4460.m4a$flv', '第4部 第33集$http://fdfs.xmcdn.com/group6/M0A/7F/78/wKgDg1VCGZXTRKKTAKe0axLk_LY251.mp3$flv', '第4部 第34集$http://fdfs.xmcdn.com/group6/M01/83/61/wKgDg1VDZi7z0EK9ALv5zs5OvEs885.mp3$flv', '第4部 第35集$http://fdfs.xmcdn.com/group6/M0A/7F/5F/wKgDhFVDZorDhtU8AKAPr7gZJ9g104.mp3$flv', '第4部 第36集$http://fdfs.xmcdn.com/group6/M0A/7F/60/wKgDhFVDZvHwkYABAJ0f2czEO0U187.mp3$flv', '第4部 第37集$http://fdfs.xmcdn.com/group6/M0A/83/87/wKgDhFVEoCmzmvL_ALCfr-QcpWI410.mp3$flv', '第4部 第38集$http://fdfs.xmcdn.com/group6/M01/87/8F/wKgDg1VEoHmBSgCBAJuNZuTzGLg068.mp3$flv', '第4部 第39集$http://fdfs.xmcdn.com/group11/M04/1C/65/wKgDa1V3UFPB3wMFAKghTCp6Jv8952.m4a$flv', '第4部 第40集$http://fdfs.xmcdn.com/group6/M06/88/B0/wKgDhFVGDjTw2DS1AJYsQRtE4HQ876.mp3$flv', '第4部 第41集$http://fdfs.xmcdn.com/group15/M03/1C/E5/wKgDZVV31KHAn7MrAJS19UgM9OQ675.m4a$flv', '第4部 第42集$http://fdfs.xmcdn.com/group12/M03/00/5C/wKgDW1VHdlHwQbxvAKGQ_RxE8bM159.mp3$flv', '第4部 第43集$http://fdfs.xmcdn.com/group16/M06/00/53/wKgDbFVHdoayZoInAJ7YqsD4Nho124.mp3$flv', '第4部 第44集$http://fdfs.xmcdn.com/group7/M07/00/56/wKgDX1VHdw6QA7EfANCFZqCZnFs126.mp3$flv', '第5部 第01集$http://fdfs.xmcdn.com/group9/M00/00/50/wKgDYlVHd3HgKveSAKh5-Jpv0YE571.mp3$flv', '第5部 第02集$http://fdfs.xmcdn.com/group16/M0B/0C/BA/wKgDalVh8JeAVw7fAD5TVpRnd7Q820.m4a$flv', '第5部 第03集$http://fdfs.xmcdn.com/group14/M07/1D/E4/wKgDY1V4rHaClWsYAKMZSocWChc308.m4a$flv', '第5部 第04集$http://fdfs.xmcdn.com/group12/M09/00/B9/wKgDW1VIp0Syl1CmAKd41BxUZtQ170.mp3$flv', '第5部 第05集$http://fdfs.xmcdn.com/group14/M08/1D/38/wKgDZFV4JpeTw9N2AKl1nCA1lqc501.m4a$flv', '第5部 第06集$http://fdfs.xmcdn.com/group16/M07/01/3A/wKgDbFVKAC3hsP-vAJ0PhZQdN3Q444.mp3$flv', '第5部 第07集$http://fdfs.xmcdn.com/group11/M0A/01/38/wKgDa1VKAEzAHs0PAJ_1kE1uQxY694.mp3$flv', '第5部 第08集$http://fdfs.xmcdn.com/group11/M01/01/AB/wKgDbVVLW5vTwCrfAJ5gqqGvV_8816.mp3$flv', '第5部 第09集$http://fdfs.xmcdn.com/group9/M06/01/A9/wKgDZlVLXYyCzTO5AJrBURNc6R4221.mp3$flv', '第5部 第10集$http://fdfs.xmcdn.com/group11/M08/01/B2/wKgDa1VLXwPBzvqGAKp06Ym99Lg052.mp3$flv', '第5部 第11集$http://fdfs.xmcdn.com/group9/M09/02/33/wKgDYlVMpGfAXVZVAJ1XXI9GzWM528.mp3$flv', '第5部 第12集$http://fdfs.xmcdn.com/group14/M09/0E/77/wKgDZFVkM2ny3m6YAEDm3XcJ0oQ571.m4a$flv', '第5部 第13集$http://fdfs.xmcdn.com/group9/M01/02/33/wKgDZlVMpSLQLZ-UAKUdkIQ1wL0791.mp3$flv', '第5部 第14集$http://fdfs.xmcdn.com/group8/M00/02/87/wKgDYFVOCNLBPQ1aAKeidmEXLM4156.mp3$flv', '第5部 第15集$http://fdfs.xmcdn.com/group9/M06/02/A5/wKgDYlVOCkSAZ9zCAKcFukOklj8059.mp3$flv', '第5部 第16集$http://fdfs.xmcdn.com/group7/M04/02/A4/wKgDWlVOC1TAWSHvAJ_Y_f90ckk561.mp3$flv', '第5部 第17集$http://fdfs.xmcdn.com/group10/M09/03/37/wKgDZ1VPfbmRunQ9AJwTR1i_RS4492.mp3$flv', '第5部 第18集$http://fdfs.xmcdn.com/group12/M00/03/2A/wKgDW1VPfgiwu2KdAKe1PAk92a8689.mp3$flv', '第5部 第19集$http://fdfs.xmcdn.com/group8/M06/03/16/wKgDYFVPfiiiHe1OAJ-oA9vSn0A067.mp3$flv', '第5部 第20集$http://fdfs.xmcdn.com/group11/M03/03/9C/wKgDa1VQrJOjfQDBAKRlEiQBz-8040.mp3$flv', '第5部 第21集$http://fdfs.xmcdn.com/group7/M05/03/9D/wKgDX1VQre7wxQ-8AJ9THS85ZK0173.mp3$flv', '第5部 第22集$http://fdfs.xmcdn.com/group12/M0A/03/8A/wKgDW1VQrmSC6rbCAKczcMgqz_Q262.mp3$flv', '第5部 第23集$http://fdfs.xmcdn.com/group11/M04/04/1A/wKgDa1VSAJ_SdKovAKGVEliaD-8127.mp3$flv', '第5部 第24集$http://fdfs.xmcdn.com/group9/M01/03/FD/wKgDZlVSAPKxTdrXAJ_Mv9I0GPQ644.mp3$flv', '第5部 第25集$http://fdfs.xmcdn.com/group7/M03/04/04/wKgDWlVSAXSyEgp8AKV2i-DaIWo824.mp3$flv', '第5部 第26集$http://fdfs.xmcdn.com/group9/M04/04/64/wKgDZlVTUn_jxnmDAKK5UU7DK4I213.mp3$flv', '第5部 第27集$http://fdfs.xmcdn.com/group7/M04/1D/65/wKgDX1V4KBCiXtQJAKdGvM5-gbo154.m4a$flv', '第5部 第28集$http://fdfs.xmcdn.com/group7/M09/04/84/wKgDX1VTUuqiLzf8AKIW3g9Hzak055.mp3$flv', '第5部 第29集$http://fdfs.xmcdn.com/group14/M06/04/BE/wKgDY1VUgoDyl3iEAJxpzjRIcL4622.mp3$flv', '第5部 第30集$http://fdfs.xmcdn.com/group9/M06/10/4A/wKgDZlVlsPbh0qQsADqgk9xpcj0764.m4a$flv', '第5部 第31集$http://fdfs.xmcdn.com/group12/M06/04/C7/wKgDXFVUgt-SGvzYAKPo_bW0WiU774.mp3$flv', '第5部 第32集$http://fdfs.xmcdn.com/group8/M0B/05/44/wKgDYFVV1FvwU4SZAKJAgDV4GRs884.mp3$flv', '第5部 第33集$http://fdfs.xmcdn.com/group15/M05/05/74/wKgDZVVV1J_xUz2vAJ6Wi45z9hw497.mp3$flv', '第5部 第34集$http://fdfs.xmcdn.com/group10/M03/05/4B/wKgDZ1VV1QfDcNhRAKSkvwYpBEw623.mp3$flv', '第5部 第35集$http://fdfs.xmcdn.com/group10/M07/05/D6/wKgDaVVXMqeBsOKWAJ0ppaBKuN0568.mp3$flv', '第5部 第36集$http://fdfs.xmcdn.com/group11/M09/05/F8/wKgDbVVXMs2hISWnAJo6n9xvSMY762.mp3$flv', '第5部 第37集$http://fdfs.xmcdn.com/group8/M02/05/F7/wKgDYVVXMw-xSHvqAKnslTyfysA587.mp3$flv', '第5部 第38集$http://fdfs.xmcdn.com/group10/M00/06/37/wKgDaVVYir6gLA9kAKIW3twUoKQ761.mp3$flv', '第5部 第39集$http://fdfs.xmcdn.com/group10/M00/06/39/wKgDZ1VYir-ToUHzAJsQgMUFjRQ685.mp3$flv', '第5部 第40集$http://fdfs.xmcdn.com/group9/M08/06/45/wKgDYlVYiufATbG_AKUXCJ14yMY181.mp3$flv', '第5部 第41集$http://fdfs.xmcdn.com/group9/M08/1C/D6/wKgDZlV313_zDaBYAKYl2oqu25M546.m4a$flv', '第5部 第42集$http://fdfs.xmcdn.com/group11/M04/06/CE/wKgDa1VZyOmxpoasAKT-i4uVEeo236.mp3$flv', '第5部 第43集$http://fdfs.xmcdn.com/group13/M00/06/BF/wKgDXlVZyRTAJYWFAJoiIrqlzfg499.mp3$flv', '第5部 第44集$http://fdfs.xmcdn.com/group8/M0A/07/16/wKgDYFVbMmyTdKJmAElfCB_Slbo136.mp3$flv', '第6部 第01集$http://fdfs.xmcdn.com/group10/M02/07/19/wKgDZ1VbMqLyOwwNAKEUGMK__-8968.mp3$flv', '第6部 第02集$http://fdfs.xmcdn.com/group12/M06/07/15/wKgDXFVbMvOCqNwwAKRLxMi0XO0162.mp3$flv', '第6部 第03集$http://fdfs.xmcdn.com/group14/M05/07/5F/wKgDZFVcdXqRGYK9AJ_pURpLukU330.mp3$flv', '第6部 第04集$http://fdfs.xmcdn.com/group9/M05/07/88/wKgDZlVcdbHTY0rgAKCB-FP-kXo212.mp3$flv', '第6部 第05集$http://fdfs.xmcdn.com/group13/M0A/07/8D/wKgDXVVcdhKSoKtGAJdALShqNdg584.mp3$flv', '第6部 第06集$http://fdfs.xmcdn.com/group15/M06/08/5E/wKgDaFVd0_LAZf1zAJ3ca1B5Z7E107.mp3$flv', '第6部 第07集$http://fdfs.xmcdn.com/group12/M01/08/39/wKgDW1Vd1EWyWWb9AKD0Qbr7i48929.mp3$flv', '第6部 第08集$http://fdfs.xmcdn.com/group9/M01/08/3E/wKgDYlVd1GviIlYbAJ32i53EsFM898.mp3$flv', '第6部 第09集$http://fdfs.xmcdn.com/group9/M02/1D/1E/wKgDYlV4KivjodLUADsnm2IeM_Q727.m4a$flv', '第6部 第10集$http://fdfs.xmcdn.com/group10/M0B/0E/08/wKgDaVVj0-OT7iAeADwUT8mapVE245.m4a$flv', '第6部 第11集$http://fdfs.xmcdn.com/group8/M0B/0A/B5/wKgDYFVgJF-jW1QcAJ9Hr0YmIGs519.mp3$flv', '第6部 第12集$http://fdfs.xmcdn.com/group9/M02/0A/CE/wKgDZlVgJH2jNBqKAKS6ydHDKYc356.mp3$flv', '第6部 第13集$http://fdfs.xmcdn.com/group15/M08/0F/E4/wKgDZVVlN9bRA9BIADxsMPjoc0I876.m4a$flv', '第6部 第14集$http://fdfs.xmcdn.com/group15/M09/0A/F8/wKgDZVVgJOfCEy5GAJ7HhYDNdcc090.mp3$flv', '第6部 第15集$http://fdfs.xmcdn.com/group7/M07/0C/AE/wKgDX1VhuU_wp-eNAKIEGCi_URc963.mp3$flv', '第6部 第16集$http://fdfs.xmcdn.com/group10/M04/0C/66/wKgDZ1VhuYnzQLJzAJoydqvsddA216.mp3$flv', '第6部 第17集$http://fdfs.xmcdn.com/group8/M03/0C/74/wKgDYVVhub7RrJAUAJ9pJ4OD_BY189.mp3$flv', '第6部 第18集$http://fdfs.xmcdn.com/group16/M00/1D/1C/wKgDbFV4MKLwFqYqADy45x69er4377.m4a$flv', '第6部 第19集$http://fdfs.xmcdn.com/group12/M06/0D/5F/wKgDXFVjCAqQfkHmAKCRe2EG2lc291.mp3$flv', '第6部 第20集$http://fdfs.xmcdn.com/group16/M06/0D/7A/wKgDbFVjCEqTeeQOAJicv5k4gsM372.mp3$flv', '第6部 第21集$http://fdfs.xmcdn.com/group10/M07/0E/C1/wKgDZ1VkZ_7gtKL5AJtPXD0Fucg595.mp3$flv', '第6部 第22集$http://fdfs.xmcdn.com/group15/M09/0E/F8/wKgDaFVkaGfDR-eOAJtrHb8-UWY134.mp3$flv', '第6部 第23集$http://fdfs.xmcdn.com/group16/M05/0E/CE/wKgDalVkaUTDjitpAKFX2Wv_luY160.mp3$flv', '第6部 第24集$http://fdfs.xmcdn.com/group10/M02/1C/3E/wKgDaVV3AoTQjOvdAEEsL9MGiuA559.m4a$flv', '第6部 第25集$http://fdfs.xmcdn.com/group13/M01/10/56/wKgDXVVlqIigUuTJAKV4LftIF2s151.mp3$flv', '第6部 第26集$http://fdfs.xmcdn.com/group9/M05/10/41/wKgDZlVlqLjjQe3nAKeg1LGqZvQ496.mp3$flv', '第6部 第27集$http://fdfs.xmcdn.com/group7/M09/10/F7/wKgDX1Vm1rWyq1ooAJzuDeDGVYo504.mp3$flv', '第6部 第28集$http://fdfs.xmcdn.com/group14/M01/10/B9/wKgDY1Vm1tjjuD9xAKPo_Z5YPF4770.mp3$flv', '第6部 第29集$http://fdfs.xmcdn.com/group16/M02/10/D0/wKgDalVm1vaAFwt2AJ3-tD9mw4Q166.mp3$flv', '第6部 第30集$http://fdfs.xmcdn.com/group11/M05/11/35/wKgDa1VoCUnj4GUpAKFqA2SULL0105.m4a$flv', '第6部 第31集$http://fdfs.xmcdn.com/group7/M00/11/6B/wKgDX1VoCYDyOQ_IAKi4SmxhIrw359.m4a$flv', '第6部 第32集$http://fdfs.xmcdn.com/group15/M00/11/4D/wKgDaFVoCbjAiVD6AKaicXh8OKw154.m4a$flv', '第6部 第33集$http://fdfs.xmcdn.com/group13/M01/12/79/wKgDXlVpnwazkRogAKUZUtdLTMA930.m4a$flv', '第6部 第34集$http://fdfs.xmcdn.com/group16/M04/12/52/wKgDalVpnz2hBoCVAKYBCreLRpM205.m4a$flv', '第6部 第35集$http://fdfs.xmcdn.com/group13/M09/12/79/wKgDXlVpn2vBmUywAKALbqAbc8k113.m4a$flv', '第6部 第36集$http://fdfs.xmcdn.com/group16/M08/13/21/wKgDalVq_7zgEk4WAKUpgSLbxNQ869.m4a$flv', '第6部 第37集$http://fdfs.xmcdn.com/group14/M06/13/46/wKgDY1VrABbTzKTSAKivfQWKaaQ854.m4a$flv', '第6部 第38集$http://fdfs.xmcdn.com/group7/M04/13/68/wKgDX1VrADax0-94AKSvtS4kad4731.m4a$flv', '第6部 第39集$http://fdfs.xmcdn.com/group7/M05/14/19/wKgDWlVsUazSQQK6AKm8QdrEuNQ222.m4a$flv', '第6部 第40集$http://fdfs.xmcdn.com/group15/M09/13/F7/wKgDaFVsUe6xWVkoAJ6nQ6EBTrY478.m4a$flv', '第6部 第41集$http://fdfs.xmcdn.com/group8/M01/13/D7/wKgDYVVsUl-AJhztALJ9m1mBD9A956.m4a$flv', '第6部 第42集$http://fdfs.xmcdn.com/group14/M03/14/B7/wKgDY1VtewrxV8UwAKpTQDy97Co454.m4a$flv', '第6部 第43集$http://fdfs.xmcdn.com/group15/M09/14/9D/wKgDZVVteznQNX7EAKEg29jzb2Y272.m4a$flv', '第6部 第44集$http://fdfs.xmcdn.com/group11/M09/14/7C/wKgDa1Vte4Cxhd7GAM7pWnfcbvQ230.m4a$flv', '第7部 第01集$http://fdfs.xmcdn.com/group13/M02/16/42/wKgDXlVvJr_T2I0wAKDb7mEAE9M593.m4a$flv', '第7部 第02集$http://fdfs.xmcdn.com/group8/M0A/15/D2/wKgDYFVvBUmT8nMQAJe7WMp25ik852.m4a$flv', '第7部 第03集$http://fdfs.xmcdn.com/group9/M07/16/01/wKgDZlVvBV7jgB2kAJ_86wBDmBY442.m4a$flv', '第7部 第04集$http://fdfs.xmcdn.com/group15/M06/16/B9/wKgDZVVwL-nznLOvAKCc5wta3Hc220.m4a$flv', '第7部 第05集$http://fdfs.xmcdn.com/group16/M05/16/A1/wKgDalVwMAGCRnyzAJfnNbJtTL8441.m4a$flv', '第7部 第06集$http://fdfs.xmcdn.com/group11/M01/16/A1/wKgDa1VwMGuTsdgoAJ94_jiHKO4389.m4a$flv', '第7部 第07集$http://fdfs.xmcdn.com/group11/M00/18/73/wKgDbVVxs9jTmIB3AKDgIR3_WxE329.m4a$flv', '第7部 第08集$http://fdfs.xmcdn.com/group13/M00/18/A1/wKgDXVVxtB_xdGuTAKJNlZD3O6A915.m4a$flv', '第7部 第09集$http://fdfs.xmcdn.com/group14/M04/18/AA/wKgDY1VxtGzAufGiAJH6cuRs5y4935.m4a$flv', '第7部 第10集$http://fdfs.xmcdn.com/group12/M0A/19/CA/wKgDW1VzvY2xZPkvAK09187iZKo667.m4a$flv', '第7部 第11集$http://fdfs.xmcdn.com/group13/M0A/1A/27/wKgDXlVzvcbhbU8RAKJsh9zDukA880.m4a$flv', '第7部 第12集$http://fdfs.xmcdn.com/group16/M01/19/F7/wKgDbFVzvhazmtMQAJAWRXXMVy0858.m4a$flv', '第7部 第13集$http://fdfs.xmcdn.com/group15/M09/1A/8D/wKgDaFV0WB2yrA2nAKTpAveEDvg428.m4a$flv', '第7部 第14集$http://fdfs.xmcdn.com/group8/M05/1A/5C/wKgDYVV0WFPCF7GEAJHCnUetUSc660.m4a$flv', '第7部 第15集$http://fdfs.xmcdn.com/group9/M06/1A/6E/wKgDYlV0WJ6g7PtZAJ25cXA5aJ0135.m4a$flv', '第7部 第16集$http://fdfs.xmcdn.com/group8/M01/1B/16/wKgDYVV1r8TRXgK8ALjlnc_B3qg853.m4a$flv', '第7部 第17集$http://fdfs.xmcdn.com/group12/M05/1A/F1/wKgDW1V1sCGR6EOpAJBc0jGXo5s438.m4a$flv', '第7部 第18集$http://fdfs.xmcdn.com/group7/M07/1B/66/wKgDX1V1sJfzIR3rAJMT8ppAhUs592.m4a$flv', '第7部 第19集$http://fdfs.xmcdn.com/group10/M08/1C/1F/wKgDZ1V27DKSLZwrAKVv6i9ij7M501.m4a$flv', '第7部 第20集$http://fdfs.xmcdn.com/group14/M08/1C/19/wKgDZFV27IHBddf5AJ12D-gEuuk675.m4a$flv', '第7部 第21集$http://fdfs.xmcdn.com/group10/M00/1C/20/wKgDZ1V27OeimtmlAKu8Gh2xY9A167.m4a$flv', '第7部 第22集$http://fdfs.xmcdn.com/group9/M0B/1D/57/wKgDZlV4P8jD3oy-AJ703vy6zQ8510.m4a$flv', '第7部 第23集$http://fdfs.xmcdn.com/group9/M06/1D/3D/wKgDYlV4QDziOB9KAJs89vmaEMM205.m4a$flv', '第7部 第24集$http://fdfs.xmcdn.com/group16/M06/1D/27/wKgDalV4QMaS3dHdAK8HXTE9Qyk460.m4a$flv', '第7部 第25集$http://fdfs.xmcdn.com/group12/M0A/1E/68/wKgDXFV5lmiSyMeyAJrKozuP63c000.m4a$flv', '第7部 第26集$http://fdfs.xmcdn.com/group13/M09/1E/E3/wKgDXlV5lu3zryxkAKG2VjuLZpA804.m4a$flv', '第7部 第27集$http://fdfs.xmcdn.com/group14/M03/1E/D5/wKgDY1V5l4zCXrurAKyYFkIDEk8131.m4a$flv', '第7部 第28集$http://fdfs.xmcdn.com/group11/M08/1F/F0/wKgDbVV65NuT3771AKcPFgMKllI323.m4a$flv', '第7部 第29集$http://fdfs.xmcdn.com/group8/M05/1F/DF/wKgDYVV65WOBIXsJAJdUgVk0MX8013.m4a$flv', '第7部 第30集$http://fdfs.xmcdn.com/group7/M02/20/33/wKgDX1V65hShk57xALSwssKoyug363.m4a$flv', '第7部 第31集$http://fdfs.xmcdn.com/group15/M07/21/4E/wKgDaFV8LUfiIgJaAJSV-Hdkhqw600.m4a$flv', '第7部 第32集$http://fdfs.xmcdn.com/group16/M09/21/1F/wKgDalV8LYKSSrwSAKZmZfg_peY574.m4a$flv', '第7部 第33集$http://fdfs.xmcdn.com/group9/M08/21/41/wKgDZlV8LeLRNZkSAKvdp9G-XK0789.m4a$flv', '第7部 第34集$http://fdfs.xmcdn.com/group12/M04/21/EB/wKgDW1V9huKgJCBDAKmeu1lDYKs006.m4a$flv', '第7部 第35集$http://fdfs.xmcdn.com/group13/M0B/22/6E/wKgDXlV9h8CSeWBuAKMDYcJTV9g320.m4a$flv', '第7部 第36集$http://fdfs.xmcdn.com/group14/M06/22/40/wKgDY1V9iMyx6DNPAKMjsxORQPk649.m4a$flv', '第7部 第37集$http://fdfs.xmcdn.com/group11/M02/23/50/wKgDa1V-1Mig6eppAJ8TxPhfIJc046.m4a$flv', '第7部 第38集$http://fdfs.xmcdn.com/group14/M03/23/4E/wKgDZFV-1Q3C2tXIAJ1BKBdQDlc557.m4a$flv', '第7部 第39集$http://fdfs.xmcdn.com/group16/M08/23/38/wKgDbFV-1UqQqSauAJQ5anR1dMA419.m4a$flv', '第7部 第40集$http://fdfs.xmcdn.com/group14/M02/24/EE/wKgDY1WANOSRmcY1AMWsqb6sbmM925.m4a$flv', '第7部 第41集$http://fdfs.xmcdn.com/group9/M01/24/BB/wKgDYlWANRmCQAJhAJ6UDSf3REs689.m4a$flv', '第7部 第42集$http://fdfs.xmcdn.com/group8/M03/24/B7/wKgDYVWANebRNGVgAOERp8ykrZY112.m4a$flv', '第8部 第01集$http://fdfs.xmcdn.com/group11/M08/26/0A/wKgDbVWBes7CXBxuAKMX06Hw0tE232.m4a$flv', '第8部 第02集$http://fdfs.xmcdn.com/group13/M02/26/1E/wKgDXVWBe7rwJb3KAJUUBqxsPO4918.m4a$flv', '第8部 第03集$http://fdfs.xmcdn.com/group9/M0B/25/DE/wKgDYlWBfBjiv-deAJYRp-Y4EHU437.m4a$flv', '第8部 第04集$http://fdfs.xmcdn.com/group13/M02/28/7E/wKgDXlWEDAnT8DomAKAwVjmrxfI572.m4a$flv', '第8部 第05集$http://fdfs.xmcdn.com/group10/M00/28/49/wKgDaVWEDIvR7YDHAJuAWLSptog104.m4a$flv', '第8部 第06集$http://fdfs.xmcdn.com/group15/M02/28/7A/wKgDZVWEDOvBxJdEAKUjf5L33aY901.m4a$flv', '第8部 第07集$http://fdfs.xmcdn.com/group11/M06/28/73/wKgDbVWELj_gqDfGAKbnbw13cN0530.m4a$flv', '第8部 第08集$http://fdfs.xmcdn.com/group8/M06/28/48/wKgDYVWELqTD_bXIAJv40DOhTyg812.m4a$flv', '第8部 第09集$http://fdfs.xmcdn.com/group16/M0A/28/59/wKgDbFWELvazuWjLAJ9y4HPtz2s570.m4a$flv', '第8部 第10集$http://fdfs.xmcdn.com/group13/M07/29/9A/wKgDXVWFfUjB06dnALt-BDJOZn0406.m4a$flv', '第8部 第11集$http://fdfs.xmcdn.com/group12/M04/29/4A/wKgDW1WFfbLzcpGrAJQh8lL5QBA929.m4a$flv', '第8部 第12集$http://fdfs.xmcdn.com/group14/M04/29/AF/wKgDY1WFfkGiP9OuAJzpJXSeaV0307.m4a$flv', '第8部 第13集$http://fdfs.xmcdn.com/group16/M08/2A/B4/wKgDalWGx93SQIUyAKNkGoCP_Q4964.m4a$flv', '第8部 第14集$http://fdfs.xmcdn.com/group15/M06/2A/F9/wKgDZVWGyHKQWGAFAJpiWcgxVM8716.m4a$flv', '第8部 第15集$http://fdfs.xmcdn.com/group12/M0A/2A/8D/wKgDW1WGyL-AMYb3AJlV0TmBXCc076.m4a$flv', '第8部 第16集$http://fdfs.xmcdn.com/group12/M08/2B/1D/wKgDW1WIMlGyA0WwAJ3GjRkCZvw741.m4a$flv', '第8部 第17集$http://fdfs.xmcdn.com/group15/M00/2B/82/wKgDaFWIMsrQjFfAAKRgZ_rIC0w637.m4a$flv', '第8部 第18集$http://fdfs.xmcdn.com/group9/M05/2B/52/wKgDZlWIMyKzUAqGAKTP-pUn1OY678.m4a$flv', '第8部 第19集$http://fdfs.xmcdn.com/group11/M0A/2C/5B/wKgDbVWJXwWj35dgAJ5X3fN7HLA405.m4a$flv', '第8部 第20集$http://fdfs.xmcdn.com/group11/M04/2C/58/wKgDa1WJX7zgIgadAJ_idIKPG8U528.m4a$flv', '第8部 第21集$http://fdfs.xmcdn.com/group10/M03/2C/52/wKgDZ1WJYDvgv7J8AJ4pBPAx47U148.m4a$flv', '第8部 第22集$http://fdfs.xmcdn.com/group16/M00/2E/74/wKgDalWLkqGDLtWVAJ5WTr1FI7k604.m4a$flv', '第8部 第23集$http://fdfs.xmcdn.com/group9/M03/2E/6C/wKgDZlWLkvDBBC-7AJzaYrKfWag643.m4a$flv', '第8部 第24集$http://fdfs.xmcdn.com/group15/M05/2E/9C/wKgDaFWLk2WCKQSoAJVmFKSXRYs179.m4a$flv', '第8部 第25集$http://fdfs.xmcdn.com/group9/M06/2E/BB/wKgDYlWMKDXyhOgRAKVuTg-JNvw564.m4a$flv', '第8部 第26集$http://fdfs.xmcdn.com/group14/M03/2F/09/wKgDZFWMKKqyFt79AJqZ5wjucCw874.m4a$flv', '第8部 第27集$http://fdfs.xmcdn.com/group10/M03/2E/D5/wKgDaVWMKRbgEuZgAJrh36CxIlA631.m4a$flv', '第8部 第28集$http://fdfs.xmcdn.com/group9/M0A/2F/F6/wKgDZlWNav-A6dBqAJzLt25IIxw267.m4a$flv', '第8部 第29集$http://fdfs.xmcdn.com/group14/M06/30/30/wKgDY1WNa63BF7nSALRjGCuD4hQ889.m4a$flv', '第8部 第30集$http://fdfs.xmcdn.com/group7/M03/30/2D/wKgDX1WNa_CS1WghAKNJ7sFP6Nk792.m4a$flv', '第8部 第31集$http://fdfs.xmcdn.com/group12/M09/30/3E/wKgDW1WOp0KQuCPrAJwwOs4HvqA983.m4a$flv', '第8部 第32集$http://fdfs.xmcdn.com/group7/M05/30/CF/wKgDWlWOqK3hHcqUAJnT-MPxbXU174.m4a$flv', '第8部 第33集$http://fdfs.xmcdn.com/group11/M03/30/94/wKgDa1WOqeSjNu28AJtu1UVLrOk615.m4a$flv', '第8部 第34集$http://fdfs.xmcdn.com/group11/M04/31/39/wKgDbVWQAu6iE1smAJv845TEwyM322.m4a$flv', '第8部 第35集$http://fdfs.xmcdn.com/group12/M01/30/E5/wKgDW1WQA2yDF0EKAJut9fA6IrA993.m4a$flv', '第8部 第36集$http://fdfs.xmcdn.com/group13/M02/31/40/wKgDXVWQA8zQSyvYALQs0nJmXtI382.m4a$flv', '第8部 第37集$http://fdfs.xmcdn.com/group11/M00/31/E6/wKgDbVWRSk_yMQoyAK89rxGyNkM233.m4a$flv', '第8部 第38集$http://fdfs.xmcdn.com/group10/M00/31/C2/wKgDaVWRSy7iUqZ2AJvJuxOmW7g851.m4a$flv', '第8部 第39集$http://fdfs.xmcdn.com/group12/M03/31/8E/wKgDXFWRS8zSuW7yAMk3GGdbnyE359.m4a$flv', '第8部 第40集$http://fdfs.xmcdn.com/group12/M02/32/8E/wKgDXFWSn4iyUaZGAJ94vsMqX_Y282.m4a$flv', '第8部 第41集$http://fdfs.xmcdn.com/group13/M04/32/EE/wKgDXlWSoQ2zdSxRALBHMFQqBMQ143.m4a$flv', '第8部 第42集$http://fdfs.xmcdn.com/group12/M0B/32/91/wKgDXFWSoczQOnbCAJTzqfmnTio957.m4a$flv', '第8部 第43集$http://fdfs.xmcdn.com/group8/M0A/34/C8/wKgDYVWT-GuCs2FVAMnRToO0x00014.m4a$flv', '第8部 第44集$http://fdfs.xmcdn.com/group15/M02/34/E5/wKgDZVWT-TqhlE0bAKMcdWBNRts644.m4a$flv', '第8部 第45集$http://fdfs.xmcdn.com/group14/M09/34/E2/wKgDY1WT-eSCpDjvAJ1xkThuLoA117.m4a$flv', '第8部 第46集$http://fdfs.xmcdn.com/group7/M09/36/52/wKgDWlWVUBrD-zbyAICzwILxVgU832.m4a$flv', '第9部 第01集$http://fdfs.xmcdn.com/group10/M01/35/CE/wKgDZ1WVUMLi__OUAJfrjKuYJ8I302.m4a$flv', '第9部 第02集$http://fdfs.xmcdn.com/group15/M00/36/1C/wKgDaFWVUTXRe6pvAJYOrLmQ_QE378.m4a$flv', '第9部 第03集$http://fdfs.xmcdn.com/group14/M08/37/A5/wKgDY1WWv36QQ-KsAKfsifIBCJ8537.m4a$flv', '第9部 第04集$http://fdfs.xmcdn.com/group13/M01/37/A8/wKgDXlWWwAnCx2rlAJ_1kjm8N-s420.m4a$flv', '第9部 第05集$http://fdfs.xmcdn.com/group16/M09/37/8A/wKgDalWWwF2T9aNbAJXiwzI-JrU139.m4a$flv', '第9部 第06集$http://fdfs.xmcdn.com/group7/M03/3A/3A/wKgDX1WasfeDxrR8AJGAruliIC4829.m4a$flv', '第9部 第07集$http://fdfs.xmcdn.com/group16/M08/39/EB/wKgDbFWasfKgRA2NAJQHiiLqzH8863.m4a$flv', '第9部 第08集$http://fdfs.xmcdn.com/group14/M01/39/D3/wKgDZFWash3io_CEAJnUKBHsXlk221.m4a$flv', '第9部 第09集$http://fdfs.xmcdn.com/group9/M02/39/A4/wKgDZlWash-CIHMZAKZKhho2Dzc774.m4a$flv', '第9部 第10集$http://fdfs.xmcdn.com/group9/M02/39/A4/wKgDZlWasi-ARcX7AJojFjocK2c995.m4a$flv', '第9部 第11集$http://fdfs.xmcdn.com/group8/M08/39/9D/wKgDYFWasoqzcmS9AI8YgDsQJyE499.m4a$flv', '第9部 第12集$http://fdfs.xmcdn.com/group16/M07/39/EC/wKgDbFWasnew5RxYAKFUG4Bo-_4540.m4a$flv', '第9部 第13集$http://fdfs.xmcdn.com/group16/M07/39/C8/wKgDalWasnrzod4TAI9nnrhK9uw141.m4a$flv', '第9部 第14集$http://fdfs.xmcdn.com/group7/M03/3A/41/wKgDWlWasenx_AiiAKGKhSt3Mgg635.m4a$flv', '第9部 第15集$http://fdfs.xmcdn.com/group7/M02/3C/35/wKgDWlWch7nz0ET9AI30gGOjq1k814.m4a$flv', '第9部 第16集$http://fdfs.xmcdn.com/group9/M05/3B/98/wKgDZlWciDyCJlo0AJuzu6tnax4429.m4a$flv', '第9部 第17集$http://fdfs.xmcdn.com/group10/M0A/3B/86/wKgDZ1WciSXwxoViAJdkvLwmdb0082.m4a$flv', '第9部 第18集$http://fdfs.xmcdn.com/group12/M0A/3C/1F/wKgDW1WdH6_gHVxkAIfBcJN0gio549.m4a$flv', '第9部 第19集$http://fdfs.xmcdn.com/group7/M09/3C/E7/wKgDWlWdIGOSOw4dAK82WktnFPo704.m4a$flv', '第9部 第20集$http://fdfs.xmcdn.com/group16/M06/3C/5D/wKgDalWdIKHQX9V3AK_yQP99eNE688.m4a$flv', '第9部 第21集$http://fdfs.xmcdn.com/group13/M08/3D/D9/wKgDXVWeh_TAhfGKAKq51ouMJQI882.m4a$flv', '第9部 第22集$http://fdfs.xmcdn.com/group12/M06/3D/80/wKgDXFWeiKDjGGbkAK9MWzbvFXg550.m4a$flv', '第9部 第23集$http://fdfs.xmcdn.com/group9/M06/3D/8A/wKgDYlWeiNSjb-8dAJjL7tiDGn4533.m4a$flv', '第9部 第24集$http://fdfs.xmcdn.com/group10/M00/3E/DE/wKgDaVWf_ELBijVTAJAmUHYauyg231.m4a$flv', '第9部 第25集$http://fdfs.xmcdn.com/group9/M05/3E/E5/wKgDZlWf_FzxFQFXAJfLa9buUJs692.m4a$flv', '第9部 第26集$http://fdfs.xmcdn.com/group7/M0A/3F/8C/wKgDWlWf_PPCuYheAJ7fDW6BKU0563.m4a$flv', '第9部 第27集$http://fdfs.xmcdn.com/group9/M02/40/80/wKgDYlWhT5jh1IWFAJLMHq6mouU839.m4a$flv', '第9部 第28集$http://fdfs.xmcdn.com/group12/M01/40/78/wKgDXFWhUA-x_4TPAJ42CFChQQU443.m4a$flv', '第9部 第29集$http://fdfs.xmcdn.com/group10/M0B/40/95/wKgDaVWhUJuT8VilAI7pkJoJvYY773.m4a$flv', '第9部 第30集$http://fdfs.xmcdn.com/group15/M0B/42/3B/wKgDaFWifcewZ2pbAJdb46gbj04843.m4a$flv', '第9部 第31集$http://fdfs.xmcdn.com/group7/M00/42/6F/wKgDWlWiflqBxE4RAKXMMJsush4825.m4a$flv', '第9部 第32集$http://fdfs.xmcdn.com/group9/M0A/41/DA/wKgDZlWifoqj8bksAJvOFuf9dnA236.m4a$flv', '第9部 第33集$http://fdfs.xmcdn.com/group9/M07/42/F5/wKgDZlWj7-zw1rUHAJ6uUamBE-Y412.m4a$flv', '第9部 第34集$http://fdfs.xmcdn.com/group10/M01/42/E7/wKgDZ1Wj8HbCno8BAKOk4KbFC6o068.m4a$flv', '第9部 第35集$http://fdfs.xmcdn.com/group13/M0B/43/1F/wKgDXlWj8JySqZ0iAJaObpFbMJQ202.m4a$flv', '第9部 第36集$http://audio.xmcdn.com/group13/M0B/43/B0/wKgDXlWlG8TCd-svAI8s_mLJ0kQ851.m4a$flv', '第9部 第37集$http://audio.xmcdn.com/group11/M04/43/AF/wKgDbVWlHBuBDtz1AJPbletRfxI483.m4a$flv', '第9部 第38集$http://audio.xmcdn.com/group7/M00/44/1C/wKgDWlWlHMuDv9h_AJSFpYLorrw161.m4a$flv', '第9部 第39集$http://audio.xmcdn.com/group11/M0B/45/08/wKgDa1WmXD-zu-IHAJTDZSiN2oQ024.m4a$flv', '第9部 第40集$http://audio.xmcdn.com/group8/M05/44/CE/wKgDYFWmXSvBvtC9AJO2xeOZIzE314.m4a$flv', '第9部 第41集$http://audio.xmcdn.com/group12/M07/44/C0/wKgDXFWmXZixZXsnAI4fCnVwurA364.m4a$flv', '第9部 第42集$http://audio.xmcdn.com/group13/M00/46/C2/wKgDXlWnw5aCUp0cAJH2APK4_EA033.m4a$flv', '第9部 第43集$http://audio.xmcdn.com/group7/M01/47/26/wKgDWlWnxGHgwfk2AJD_acVsfx0009.m4a$flv', '第9部 第44集$http://audio.xmcdn.com/group10/M05/46/80/wKgDaVWnxPDQVVhrAJ-vBZPpKuk157.m4a$flv', '第9部 第45集$http://audio.xmcdn.com/group15/M00/48/1F/wKgDZVWpES-zuCCnAKvDV315zBs299.m4a$flv', '第9部 第46集$http://audio.xmcdn.com/group12/M02/47/76/wKgDXFWpEZCyNtUHAJ8oHYbMFBA129.m4a$flv', '第9部 第47集$http://audio.xmcdn.com/group7/M08/48/3E/wKgDWlWpEj6TO8DxAJplVLAUW1w298.m4a$flv', '第9部 第48集$http://audio.xmcdn.com/group15/M09/48/B4/wKgDZVWrEjXiHjSGAJoUa33xqK8655.m4a$flv', '第9部 第49集$http://audio.xmcdn.com/group13/M05/48/5F/wKgDXlWrEkOiZ3BYAJDPAUb0vP4316.m4a$flv', '第9部 第50集$http://audio.xmcdn.com/group12/M02/48/15/wKgDW1WrEwuisW_TAMgk4nEDnBA303.m4a$flv', '第10部 第01集$http://audio.xmcdn.com/group10/M07/48/5D/wKgDZ1Wrn_KAezZQAKKIHqAU0RU166.m4a$flv', '第10部 第02集$http://audio.xmcdn.com/group16/M03/48/9A/wKgDalWroE6wqCoRAJ2JFa6ZtZ8328.m4a$flv', '第10部 第03集$http://audio.xmcdn.com/group14/M0A/48/CF/wKgDY1WroR3ieMhsAJL7Dijnt8w470.m4a$flv', '第10部 第04集$http://audio.xmcdn.com/group9/M06/49/06/wKgDYlWtCTiRsiW5AI9JAO3bbn4388.m4a$flv', '第10部 第05集$http://audio.xmcdn.com/group11/M01/49/42/wKgDa1WtCjHT_1-kAJ0AwmOaI78579.m4a$flv', '第10部 第06集$http://audio.xmcdn.com/group12/M08/49/0B/wKgDW1WtCr_ytlGZAJGN2roLkyA784.m4a$flv', '第10部 第07集$http://audio.xmcdn.com/group13/M08/4A/A4/wKgDXlWuSzniWoe8AI3M5W_Es2I281.m4a$flv', '第10部 第08集$http://audio.xmcdn.com/group10/M00/4A/72/wKgDZ1WuTByyjwOxAJGuN-MIWws090.m4a$flv', '第10部 第09集$http://audio.xmcdn.com/group14/M0A/4A/F0/wKgDY1WuTNDhd3DOAJrcDcE-T9o939.m4a$flv', '第10部 第10集$http://audio.xmcdn.com/group7/M08/4C/7A/wKgDX1WvrZnSn5vZAJirkf7Pr1s304.m4a$flv', '第10部 第11集$http://audio.xmcdn.com/group9/M0B/4B/B0/wKgDYlWvrebRJlwdAJH9bn_8vTo469.m4a$flv', '第10部 第12集$http://audio.xmcdn.com/group11/M06/4C/00/wKgDa1Wvrruy4HaxAJVNDCbdpOM859.m4a$flv', '第10部 第13集$http://audio.xmcdn.com/group13/M01/4D/4C/wKgDXlWw_5ST2hqPAJCu32nRwLQ972.m4a$flv', '第10部 第14集$http://audio.xmcdn.com/group16/M09/4D/69/wKgDbFWxAELA2YAaAJOfQcTm8fw171.m4a$flv', '第10部 第15集$http://audio.xmcdn.com/group15/M08/4D/AB/wKgDZVWxANzgfQbAAJEp88essjo121.m4a$flv', '第10部 第16集$http://audio.xmcdn.com/group16/M03/4E/75/wKgDbFWyUD-hSrz0AJXFVOgJNR4581.m4a$flv', '第10部 第17集$http://audio.xmcdn.com/group12/M00/4E/01/wKgDW1WyUQuS4ApBAJR4cfBSy88569.m4a$flv', '第10部 第18集$http://audio.xmcdn.com/group11/M00/4E/68/wKgDbVWyUX-BQE0lAJI94A9T5M0733.m4a$flv', '第10部 第19集$http://audio.xmcdn.com/group8/M05/4F/5D/wKgDYFWzhr-g0eOvAJWiIHIe_WE731.m4a$flv', '第10部 第20集$http://audio.xmcdn.com/group7/M07/50/00/wKgDX1WzhzyCMpm5AJhCJGMEFPM477.m4a$flv', '第10部 第21集$http://audio.xmcdn.com/group8/M08/4F/91/wKgDYVWzh8bRs4hdAJbanaOIEn0937.m4a$flv', '第10部 第22集$http://audio.xmcdn.com/group10/M01/50/D8/wKgDaVW081eS-VNsAJtRZ7vreS0148.m4a$flv', '第10部 第23集$http://audio.xmcdn.com/group8/M0A/51/0E/wKgDYVW085eQCR7ZAKOgPm5NZGM105.m4a$flv', '第10部 第24集$http://audio.xmcdn.com/group12/M09/50/C3/wKgDXFW08_iQ_P4AAJRYFI1KDEk888.m4a$flv', '第10部 第25集$http://audio.xmcdn.com/group15/M00/52/CC/wKgDZVW2RZ2AA91JAJPaKZVM3ng161.m4a$flv', '第10部 第26集$http://audio.xmcdn.com/group8/M06/52/71/wKgDYVW2RaSTAplUAI0bix5Jx74718.m4a$flv', '第10部 第27集$http://audio.xmcdn.com/group8/M0A/52/3E/wKgDYFW2RkXCX0WkAJqRMmyGefs714.m4a$flv', '第10部  第28集$http://audio.xmcdn.com/group13/M0A/53/61/wKgDXVW3s8HA--hpAJlaIFUiFM0277.m4a$flv', '第10部 第29集$http://audio.xmcdn.com/group8/M00/53/18/wKgDYFW3tFbyvJW2AJsbOWpH7TQ801.m4a$flv', '第10部 第30集$http://audio.xmcdn.com/group15/M04/53/A0/wKgDaFW3tIjjAK2LAJWlD-xuKDA214.m4a$flv', '第10部  第31集$http://audio.xmcdn.com/group12/M02/53/89/wKgDXFW4-q-CfBCPAJ7dQfLJ5sU440.m4a$flv', '第10部 第32集$http://audio.xmcdn.com/group12/M04/53/89/wKgDXFW4-wXSfN8OAJYiBjLCyaQ599.m4a$flv', '第10部 第33集$http://audio.xmcdn.com/group9/M09/53/9C/wKgDYlW4-zaRUOWEAJTQgRV7U7Y792.m4a$flv', '第10部 第34集$http://audio.xmcdn.com/group16/M05/54/C4/wKgDbFW6OQ7A0ZoVAJ5gzggiiM4136.m4a$flv', '第10部 第35集$http://audio.xmcdn.com/group7/M0B/55/13/wKgDX1W6ObvBIharAJ81Rf3BYqQ381.m4a$flv', '第10部 第36集$http://audio.xmcdn.com/group14/M02/54/EA/wKgDY1W6Oj_BFI6-AJCjIwi8EoY366.m4a$flv', '第10部 第37集$http://audio.xmcdn.com/group10/M0B/55/16/wKgDZ1W7heDyW4IdAKKhDhNzLAU471.m4a$flv', '第10部 第38集$http://audio.xmcdn.com/group13/M06/55/77/wKgDXlW7hriCNNVTAJQ5Rs43nAE803.m4a$flv', '第10部 第39集$http://audio.xmcdn.com/group9/M0A/55/33/wKgDZlW7h_Th2cOpAJhpm5OdFpg601.m4a$flv', '第10部 第40集$http://audio.xmcdn.com/group8/M08/55/A3/wKgDYFW8_vPgEYMgAKf7KV-kako277.m4a$flv', '第10部 第41集$http://audio.xmcdn.com/group15/M02/56/1C/wKgDZVW9ANGRV-AAAKz0Z_bE-HA334.m4a$flv', '第10部 第42集$http://audio.xmcdn.com/group13/M07/56/08/wKgDXlW9Ao7iYFAlAKLmO_ITKJo646.m4a$flv', '第10部 第43集$http://audio.xmcdn.com/group9/M03/55/EC/wKgDYlW-MWyxdSuSAJZ_z-sl_rs387.m4a$flv', '第10部 第44集$http://audio.xmcdn.com/group8/M06/56/4A/wKgDYVW-MhLD37QFAJbPEYgdpfs610.m4a$flv', '第10部 第45集$http://audio.xmcdn.com/group15/M03/56/85/wKgDZVW-MuWyDbtiAJXzJg8xQek223.m4a$flv', '第10部 第46集$http://audio.xmcdn.com/group12/M0A/56/5B/wKgDXFW_c27BrAJaAJPYpmKWYk8975.m4a$flv', '第10部 第47集$http://audio.xmcdn.com/group15/M05/57/02/wKgDZVW_dCzCbpF0AJcZ7eAqEZI990.m4a$flv', '第10部 第48集$http://audio.xmcdn.com/group13/M08/56/EC/wKgDXVW_dE6zUtwVAJfs4PSVyxQ630.m4a$flv', '第10部 第49集$http://audio.xmcdn.com/group16/M01/57/BC/wKgDbFXA2a3zh3bYALLkGdoqf-U922.m4a$flv', '第10部 第50集$http://audio.xmcdn.com/group8/M02/57/9B/wKgDYVXA2hqxiPpvAJG_rhsh7Wg135.m4a$flv', '第10部 第51集$http://audio.xmcdn.com/group8/M08/57/9C/wKgDYVXA2pTSeANdAJcZ1b4cyYQ281.m4a$flv', '第10部 第52集$http://audio.xmcdn.com/group10/M05/57/D2/wKgDZ1XCJRzhBiJAAJTDTWzC_JY600.m4a$flv', '第10部 第53集$http://audio.xmcdn.com/group16/M09/58/5D/wKgDbFXCJZyQLd8SAKJ_kzCDQo4553.m4a$flv', '第10部 第54集$http://audio.xmcdn.com/group11/M09/5B/A9/wKgDbVXCJjXxx2U8AJvxP379WW8352.m4a$flv', '第10部 第55集$http://audio.xmcdn.com/group12/M07/58/6D/wKgDW1XDdtyhgqx4AJ1BEF7sZDM219.m4a$flv', '第10部 第56集$http://audio.xmcdn.com/group15/M06/59/2B/wKgDaFXDd2ShBkw4AJu2emRfkgE138.m4a$flv', '第10部 第57集$http://audio.xmcdn.com/group9/M05/58/C7/wKgDZlXDd4jAH4LsAJV3rvHFhgg464.m4a$flv', '第10部 第58集$http://audio.xmcdn.com/group10/M03/59/2D/wKgDZ1XE1eDxt_eeAJyFWjsYlAM508.m4a$flv', '第10部 第59集$http://audio.xmcdn.com/group8/M05/59/66/wKgDYFXE1pKhoR29AJUeS8a1a_4836.m4a$flv', '第10部 第60集$http://audio.xmcdn.com/group7/M00/5A/09/wKgDWlXE1tvRyF_5AJPPwZLnqb0066.m4a$flv', '第10部 第61集$http://audio.xmcdn.com/group7/M09/5A/7E/wKgDWlXGCEaxEoMyAJyePlmCxPg017.m4a$flv', '第10部 第62集$http://audio.xmcdn.com/group9/M08/59/F8/wKgDZlXGCGHz3papAJf-ttsO_3w737.m4a$flv', '第10部 第63集$http://audio.xmcdn.com/group13/M07/5A/17/wKgDXlXGCMLg1iC9AJlna-tyqbo750.m4a$flv', '第10部 第64集$http://audio.xmcdn.com/group15/M08/5A/C9/wKgDaFXHYnXTqyfXAJjTUGN4SBU533.m4a$flv', '第10部 第65集$http://audio.xmcdn.com/group16/M00/5A/BA/wKgDbFXHYuTzcvyfAJvit3ItkLY110.m4a$flv', '第10部 第66集$http://audio.xmcdn.com/group7/M04/5A/FD/wKgDX1XHY5niYOywAJ13b8Wrhi4744.m4a$flv', '第10部 第67集$http://audio.xmcdn.com/group15/M02/5A/B8/wKgDZVXHZIjCDUyfAPRyvRtlDNQ223.m4a$flv']]
    ];

    for (let index=i = 0; index < VideoListJson[0][1].length; index++) {
        temp = VideoListJson[0][1][index].split("$")
        // if (temp[1].indexOf("m4a") > 0) {
            zdmmList[index] = {
                title: temp[0],
                source: [
                    [temp[1], "audio/ogg"]
                ],
                actor: "紫襟",
                lrc: ""
            }
            // i++;
        // }
    }

    // console.log(zdmmList)

    Hlib.addEvent = function (el, event, func) {
        if (el.attachEvent) {
            el.attachEvent("on" + event, func);
        } else {
            el.addEventListener(event, func);
        }
    };

    Hlib.removeEvent = function (el, event, func) {
        if (el.detachEvent) {
            el.detachEvent("on" + event, func);
        } else {
            el.removeEventListener(event, func);
        }
    };

    Hlib.liveEvent = function (chir, event, func, par) {
        Hlib.addEvent(par || document, event, function (e) {
            var qs = (par || document).querySelectorAll(chir);
            if (qs) {
                var el = e.target || e.srcElement,
                    index = -1;
                while (el && (index = Array.prototype.indexOf.call(qs, el) === -1)) {
                    el = el.parentElement;
                }

                if (index > -1) {
                    func.call(el, e);
                }
            }
        })
    }

    Hlib.getCurrentStyle = function (el, attr) {
        var style = window.getComputedStyle ? window.getComputedStyle(el, null) : el.currentStyle;
        return style[attr];
    }

    var timeFctory = function (sec) {
        var m = parseInt(sec / 60);
        var s = parseInt(sec % 60);
        var result = 0;
        if (m > 9) {
            result = '' + m + ":";
        } else {
            result = "0" + m + ":";
        }

        if (s > 9) {
            result = result + s;
        } else {
            result = result + "0" + s;
        }

        return result;
    };
    
    //播放器service
    var player = {
        dom: document.getElementById("h5playerMatic"),
        deviceType: 1,
        /*0 pc 1 mobile*/
        volumeState: 0,
        /*音量调显示*/
        volume: 0.1,
        playState: 0,
        /*播放状态 开始 暂停*/
        lrcState: 0,
        src: "",
        readyState: 0,
        lrcFactory: "",
        lrcData: "",
        progessBar: "",
        songList: zdmmList,
        // songList: [{
        //         title: "喜剧之王",
        //         source: [
        //             ["http://statics.h-five.com/mp3/%E5%96%9C%E5%89%A7%E4%B9%8B%E7%8E%8B-%E6%9D%8E%E8%8D%A3%E6%B5%A9.mp3", 'audio/mpeg']
        //         ],
        //         actor: "李荣浩",
        //         lrc: strVar
        //     },
        //     {
        //         title: '不搭',
        //         source: [
        //             ['http://7xknbg.com1.z0.glb.clouddn.com/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E4%B8%8D%E6%90%AD.mp3', 'audio/mpeg']
        //         ],
        //         actor: "李荣浩",
        //         lrc: ''
        //     }
        // ],
        nowSongId: 0,
        timerHandle: function () {},
        setTimer: function () {

            clearInterval(this.timerHandle);

            var self = this;
            // 定时器
            var progessHandle = setInterval(function () {
                var rateB = self.dom.currentTime / self.dom.duration;
                //console.log("watch " + rateB);

                // 关闭之前的定时器
                if (rateB >= 1) {
                    clearInterval(progessHandle);
                    //界面Ui修改
                    self.dom.pause();
                    self.dom.currentTime = 0;
                    document.getElementById("h5-play").querySelector("i").className = "ion-ios-play-outline";
                }
                //同步歌曲当前时间
                document.getElementById("timer").innerHTML = timeFctory(self.dom.currentTime);

                // 同步歌词位置

                self.lrcFactory.srcollToLrcByTime(parseInt(self.dom.currentTime));

                self.progessBar.setPos(rateB);
                // 同步进度条位置
                self.progessBar.showPosPx(rateB);
            }, 500);

            this.timerHandle = progessHandle;
        },
        stopTimer: function () {
            clearInterval(this.timerHandle);
        },
        lrcLodaer: function (lrc) {
            this.lrcData = analyseLrc(lrc).innitLrc();
        },
        changeSongSrc: function (songNews) {
            this.dom.pause();
            var type = "";
            this.dom.innerHTML = "";

            for (i = 0; i < songNews.source.length; i = i + 1) {
                type = this.dom.canPlayType(songNews.source[i][1]);
                if (type == 'maybe' || type === "probably") {
                    this.dom.src = songNews.source[i][0];
                    this.dom.type = songNews.source[i][1];
                }
            }
        },
        playOtherSong: function (songNews) {
            //新的一曲

            console.log(songNews);
            this.dom.pause();
            this.changeSongSrc(songNews);

            //修改歌曲名


            document.getElementById("songTitle").innerHTML = songNews.title;
            //清空歌词
            this.lrcFactory.clear();
            //获取歌词
            this.getLrc(songNews.lrc);
            //歌词滚动
            this.lrcFactory.changLrc(this.lrcData);

            this.progessBar.setPos(0);
            document.getElementById("totalTime").innerHTML = "00:00";
            document.getElementById("timer").innerHTML = timeFctory(this.dom.currentTime);

            //判断是否自动播放
            if (this.playState % 2 != 0) {
                this.dom.play();
                document.getElementById("h5-play").querySelector("i").className = "ion-ios-pause-outline";
                // 开启进度条
                this.setTimer();
            } else {
                player.dom.pause();
                document.getElementById("h5-play").querySelector("i").className = "ion-ios-play-outline";
                // 停止进度条
                player.stopTimer();
            }
        },
        getLrc: function (lrcDate) {
            this.lrcData = lrcDate;
        },
        createListHtml: function () {
            var html = "<ul>";
            var i = 0;
            var sl = this.songList;
            for (i = 0; i < sl.length - 1; i++) {
                html += "<li sId='" + i + "'>" + sl[i].title + "<span class='ion-ios-musical-note'></span></li>";
            }

            html += "<ul>";
            document.getElementById("vList").innerHTML = html;
            return this;
        },
        init: function () {
            var self = this;


            this.createListHtml();
            /*pc端绑定音量调节事件，移动端则不*/

            if (parseInt(Hlib.getCurrentStyle(document.body, 'width')) >= 900) {

                //音量默认值
                this.dom.volume = this.volume;

                // 音量条事件
                //创建音量调条
                h5Progess({
                    pid: "val",
                    width: "100%",
                    dotSize: 16,
                    pSize: 6,
                    pos: self.dom.volume,
                }).afterChanged(function (x) {
                    //alert(x);
                    self.dom.volume = x;
                });

                //音量调节UI
                volumeUI = document.getElementById("h5p-volume");
                volumeUI.style.display = "block";
                Hlib.addEvent(volumeUI, "click", function () {
                    var state = ["hidden", "visible"];
                    player.volumeState = (player.volumeState + 1) % 2;

                    document.getElementById("valCon").style.visibility = state[player.volumeState];
                });
            }

            // 音量调 end

            // 进度条

            this.progessBar = h5Progess({
                pid: "processbody-con",
                width: "auto",
                dotSize: 20,
                pSize: 6,
                pos: 0,
                deviceType: 1
            }).afterStop(function (x) {
                player.dom.currentTime = player.dom.duration * x;
                self.lrcFactory.srcollToLrcByTime(parseInt(self.dom.currentTime));
                player.setTimer();

            }).afterChanged(function (x) {

            }).afterPress(function (x) {
                player.stopTimer();
            });


            this.lrcFactory = new lrcScroll({
                id: "lrcConP",
                lrc: ""
            });


            Hlib.addEvent(this.dom, 'canplay', function () {
                document.getElementById("totalTime").innerHTML = timeFctory(self.dom.duration);

            });

            // 播放控制按钮
            Hlib.addEvent(document.getElementById("h5-play"), "click", function () {
                player.playState = (player.playState + 1) % 2;
                if (player.playState === 0) {

                    player.dom.pause();
                    this.querySelector("i").className = "ion-ios-play-outline";
                    // 停止进度条
                    player.stopTimer();
                } else {
                    player.dom.play();
                    this.querySelector("i").className = "ion-ios-pause-outline";
                    // 开启进度条
                    player.lrcLodaer(strVar);
                    player.setTimer();
                }
            });

            //歌曲数据开始加载
            Hlib.addEvent(self.dom, 'loadstart', function (e) {

                document.getElementById('loading').style.display = "block";

            })

            var audio = document.getElementById("h5playerMatic"); 
            audio.addEventListener('error', function () {  
                document.getElementById("h5-next").click();
            }, false);

            Hlib.addEvent(self.dom, 'progress', function (e) {

            })
            //歌曲数据加载完成
            Hlib.addEvent(self.dom, 'loadeddata', function (e) {
                document.getElementById('loading').style.display = "none";
            })


            //下一曲事件
            Hlib.addEvent(document.getElementById("h5-next"), 'click', function () {
                var len = self.songList.length;

                if (self.nowSongId + 1 >= len) {
                    self.nowSongId = 0;
                } else {
                    self.nowSongId = self.nowSongId + 1;
                }
                console.log(self.nowSongId);

                self.playOtherSong(self.songList[self.nowSongId]);
            });

            //上一曲事件
            Hlib.addEvent(document.getElementById("h5-forward"), 'click', function () {

                if (self.nowSongId - 1 < 0) {
                    self.nowSongId = self.songList.length - 1;
                } else {
                    self.nowSongId = self.nowSongId - 1;
                }

                console.log(self.nowSongId);
                self.playOtherSong(self.songList[self.nowSongId]);
            });

            //列表展示
            Hlib.addEvent(document.getElementById("songList"), 'click', function () {
                document.getElementById("maskLayer").style.display = "block";
                document.getElementById("maskLayer").style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                document.getElementById("bundleDioalg").style.bottom = "0px";
            });

            //列表关闭
            Hlib.addEvent(document.getElementById("closeList"), 'click', function () {
                document.getElementById("maskLayer").style.display = "none";
                document.getElementById("maskLayer").style.backgroundColor = "rgba(0, 0, 0, 0)";
                document.getElementById("bundleDioalg").style.bottom = "-100%";
            });


            //列表点击
            Hlib.liveEvent("li", 'click', function () {
                var sid = this.getAttribute("sid");
                console.log(sid);
                self.nowSongId = parseInt(sid);

                self.playOtherSong(self.songList[sid]);
                document.getElementById("maskLayer").style.display = "none";
                document.getElementById("maskLayer").style.backgroundColor = "rgba(0, 0, 0, 0)";
                document.getElementById("bundleDioalg").style.bottom = "-100%";

            }, document.getElementById('vList'));

            this.playOtherSong(self.songList[0]);
        }
    }

    player.init();

})();