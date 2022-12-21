const MEMORY_VERSE_PACK = {
    ASSURANCES: "5 Assurances",
    TMS_60_A: "TMS 60 - A",
    TMS_60_B: "TMS 60 - B",
    TMS_60_C: "TMS 60 - C",
    TMS_60_D: "TMS 60 - D",
    TMS_60_E: "TMS 60 - E",
    TMS_60: "TMS - 60",
    DEP_242: "DEP - 242",
};

export const MOCK_MEMORY_VERSE_PACK = Object.values(MEMORY_VERSE_PACK);

/**
* Sample:
* {
   id: 1,
   title: Verse Title,
   verse: Bible Verse,
   reference: Verse Reference,
   memory_pack: MEMORY_VERSE_PACK.ASSURANCES,
 },
*/

export const MOCK_VERSES = [
    {
        id: 1,
        title: "Assurance of Salvation",
        verse:
            "And this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life.",
        reference: "1 John 5:11-12",
        memory_pack: MEMORY_VERSE_PACK.ASSURANCES,
    },
    {
        id: 2,
        title: "Assurance of Answered Prayer",
        verse:
            "Until now you have not asked for anything in my name. Ask and you will receive, and your joy will be complete.",
        reference: "John 16:24",
        memory_pack: MEMORY_VERSE_PACK.ASSURANCES,
    },
    {
        id: 3,
        title: "Assurance of Victory",
        verse:
            "No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.",
        reference: "1 Corinthians 10:13",
        memory_pack: MEMORY_VERSE_PACK.ASSURANCES,
    },
    {
        id: 4,
        title: "Assurance of Forgivenes",
        verse:
            "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
        reference: "1 John 1:9",
        memory_pack: MEMORY_VERSE_PACK.ASSURANCES,
    },
    {
        id: 5,
        title: "Assurance of Guidance",
        verse:
            "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        reference: "Proverbs 3:5-6",
        memory_pack: MEMORY_VERSE_PACK.ASSURANCES,
    },
    {
        id: 1,
        title: "Christ the Center",
        reference: "2 Corinthians 5:17",
        verse:
            "Therefore, if anyone is in Christ, he is a new creation; the old has gone, the new has come!",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_A,
    },
    {
        id: 2,
        title: "Christ the Center",
        reference: "Galatians 2:20",
        verse:
            "I have been crucified with Christ and I no longer live, but Christ lives in me. The life I live in the body, I live by faith in the Son of God, who loved me and gave Himself for me.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_A,
    },
    {
        id: 3,
        title: "Obedience to Christ",
        reference: "Romans 12:1",
        verse:
            "Therefore, I urge you, brothers, in view of God's mercy to offer your bodies as living sacrifices, holy and pleasing to God - this is your spiritual act of worship.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_A,
    },
    {
        id: 4,
        title: "Obedience to Christ",
        reference: "John 14:21",
        verse:
            "Whoever has My commands and obeys them, he is the one who loves Me. He who loves Me will be loved by My Father, and I too will love him and show Myself to him.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_A,
    },
    {
        id: 5,
        title: "The Word",
        reference: "2 Timothy 3:16",
        verse:
            "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_A,
    },
    {
        id: 6,
        title: "The Word",
        reference: "Joshua 1:8",
        verse:
            "Do not let this Book of the Law depart from your mouth; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_A,
    },
    {
        id: 7,
        title: "Prayer",
        reference: "Philippians 4:6-7",
        verse:
            "Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_A,
    },
    {
        id: 8,
        title: "Prayer",
        reference: "John 15:7",
        verse:
            "If you remain in Me and My words remain in you, ask whatever you wish, and it will be given you.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_A,
    },
    {
        id: 9,
        title: "Fellowship",
        reference: "Matthew 18:20",
        verse:
            "For where two or three come together in My name, there am I with them.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_A,
    },
    {
        id: 10,
        title: "Fellowship",
        reference: "Hebrews 10:24-25",
        verse:
            "And let us consider how we may spur one another on toward love and good deeds. Let us not give up meeting together, as some are in the habit of doing, but let us encourage one another - and all the more as you see the Day approaching.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_A,
    },
    {
        id: 11,
        title: "Witnessing",
        reference: "Matthew 4:19",
        verse:
            '"Come, follow Me," Jesus said, "and I will make you fishers of men."',
        memory_pack: MEMORY_VERSE_PACK.TMS_60_A,
    },
    {
        id: 12,
        title: "Witnessing",
        reference: "Romans 1:16",
        verse:
            "I am not ashamed of the gospel, because it is the power of God for the salvation of everyone who believes: first for the Jew, then for the Gentile.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_A,
    },
    {
        id: 1,
        title: "All Have Sinned",
        reference: "Romans 3:23",
        verse: "For all have sinned and fall short of the glory of God.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_B,
    },
    {
        id: 2,
        title: "All Have Sinned",
        reference: "Isaiah 53:6",
        verse:
            "We all, like sheep, have gone astray, each of us has turned to his own way; and the Lord has laid on Him the iniquity of us all.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_B,
    },
    {
        id: 3,
        title: "Sin's Penalty",
        reference: "Romans 6:23",
        verse:
            "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_B,
    },
    {
        id: 4,
        title: "Sin's Penalty",
        reference: "Hebrews 9:27",
        verse:
            "Just as man is destined to die once, and after that to face judgment.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_B,
    },
    {
        id: 5,
        title: "Christ Paid the Penalty",
        reference: "Romans 5:8",
        verse:
            "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_B,
    },
    {
        id: 6,
        title: "Christ Paid the Penalty",
        reference: "1 Peter 3:18",
        verse:
            "For Christ died for sins once for all, the righteous for the unrighteous, to bring you to God. He was put to death in the body but made alive by the Spirit.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_B,
    },
    {
        id: 7,
        title: "Salvation Not by Works",
        reference: "Ephesians 2:8-9",
        verse:
            "For it is by grace you have been saved, through faith- and this not from yourselves, it is the gift of God- not by works, so that no one can boast.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_B,
    },
    {
        id: 8,
        title: "Salvation Not by Works",
        reference: "Titus 3:5",
        verse:
            "He saved us, not because of righteous things we had done, but because of His mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_B,
    },
    {
        id: 9,
        title: "Must Receive Christ",
        reference: "John 1:12",
        verse:
            "Yet to all who received Him, to those who believed in His name, He gave the right to become children of God.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_B,
    },
    {
        id: 10,
        title: "Must Receive Christ",
        reference: "Revelations 3:20",
        verse:
            "Here I am! I stand at the door and knock. If anyone hears My voice and opens the door, I will come in and eat with him, and he with Me.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_B,
    },
    {
        id: 11,
        title: "Assurance of Salvation",
        reference: "1 John 5:13",
        verse:
            "I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_B,
    },
    {
        id: 12,
        title: "Assurance of Salvation",
        reference: "John 5:24",
        verse:
            "I tell you the truth, whoever hears My word and believes Him who sent Me has eternal life and will not be condemned; he has crossed over from death to life.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_B,
    },
    {
        id: 1,
        title: "His Spirit",
        reference: "1 Corinthians 3:16",
        verse:
            "Don't you know that you yourselves are God's temple and that God's Spirit lives in you?",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_C,
    },
    {
        id: 2,
        title: "His Spirit",
        reference: "1 Corinthians 2:12",
        verse:
            "We have not received the spirit of the world but the Spirit who is from God, that we may understand what God has freely given us.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_C,
    },
    {
        id: 3,
        title: "His Strength",
        reference: "Isaiah 41:10",
        verse:
            "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with My righteous right hand.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_C,
    },
    {
        id: 4,
        title: "His Strength",
        reference: "Philippians 4:13",
        verse: "I can do everything through Him who gives me strength.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_C,
    },
    {
        id: 5,
        title: "His Faithfulness",
        reference: "Lamentations 3:22-23",
        verse:
            "Because of the Lord's great love we are not consumed, for His compassions never fail. They are new every morning; great is Your faithfulness.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_C,
    },
    {
        id: 6,
        title: "His Faithfulness",
        reference: "Numbers 23:29",
        verse:
            "God is not a man, that He should lie, nor a son of man, that He should change His mind. Does He speak and then not act? Does he promise and not fulfil?",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_C,
    },
    {
        id: 7,
        title: "His Peace",
        reference: "Isaiah 26:3",
        verse:
            "You will keep in perfect peace him whose mind is steadfast, because he trusts in You.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_C,
    },
    {
        id: 8,
        title: "His Peace",
        reference: "1 Peter 5:7",
        verse: "Cast all your anxiety on Him because He cares for you.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_C,
    },
    {
        id: 9,
        title: "His Provision",
        reference: "Romans 8:32",
        verse:
            "He who did not spare His own Son, but gave Him up for us all- how will He not also, along with Him, graciously give us all things?",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_C,
    },
    {
        id: 10,
        title: "His Provision",
        reference: "Philippians 4:19",
        verse:
            "And my God will meet all your needs according to His glorious riches in Christ Jesus.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_C,
    },
    {
        id: 11,
        title: "His Help in Temptation",
        reference: "Hebrews 2:18",
        verse:
            "Because he Himself suffered when He was tempted. He is able to help those who are being tempted.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_C,
    },
    {
        id: 12,
        title: "His Help in Temptation",
        reference: "Psalm 119:9,11",
        verse:
            "How can a young man keep his way pure? By living according to Your word. I have hidden Your word in my heart that I might not sin against you.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_C,
    },
    {
        id: 1,
        title: "Put Christ First",
        reference: "Matthew 6:33",
        verse:
            "But seek first His kingdom and His righteousness, and all these things will be given to you as well.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_D,
    },
    {
        id: 2,
        title: "Put Christ First",
        reference: "Luke 9:23",
        verse:
            'Then He said to them all: "If anyone would come after Me, he must deny himself and take up his cross daily and follow Me."',
        memory_pack: MEMORY_VERSE_PACK.TMS_60_D,
    },
    {
        id: 3,
        title: "Separate from the World",
        reference: "1 John 2:15-16",
        verse:
            "Do not love the world or anything in the world. If anyone loves the world, the love of the Father is not in him. For everything in the world- the cravings of sinful man, the lust of his eyes and the boasting of what he has and does- comes not from the Father but from the world.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_D,
    },
    {
        id: 4,
        title: "Separate from the World",
        reference: "Romans 12:2",
        verse:
            "Do not conform any longer to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is- His good, pleasing and perfect will.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_D,
    },
    {
        id: 5,
        title: "Be Steadfast",
        reference: "1 Corinthians 15:58",
        verse:
            "Therefore, my dear brothers, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_D,
    },
    {
        id: 6,
        title: "Be Steadfast",
        reference: "Hebrews 12:3",
        verse:
            "Consider Him who endured such opposition from sinful men, so that you will not grow weary and lose heart.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_D,
    },
    {
        id: 7,
        title: "Serve Others",
        reference: "Mark 10:45",
        verse:
            "For even the Son of Man did not come to be served, but to serve and to give His life as a ransom for many.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_D,
    },
    {
        id: 8,
        title: "Serve Others",
        reference: "2 Corinthians 4:5",
        verse:
            "For we do not preach ourselves, but Jesus Christ as Lord, and ourselves as your servants for Jesus' sake.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_D,
    },
    {
        id: 9,
        title: "Give Generously",
        reference: "Proverbs 3:9-10",
        verse:
            "Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_D,
    },
    {
        id: 10,
        title: "Give Generously",
        reference: "2 Corinthians 9:6-7",
        verse:
            "Remember this: Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously. Each man should give what he has decided in his heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_D,
    },
    {
        id: 11,
        title: "Develop World Vision",
        reference: "Acts 1:8",
        verse:
            "But you will receive power when the Holy Spirit comes on you; and you will be My witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_D,
    },
    {
        id: 12,
        title: "Develop World Vision",
        reference: "Matthew 28:19-20",
        verse:
            "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_D,
    },
    {
        id: 1,
        title: "Love",
        reference: "John 13:34-35",
        verse:
            "A new command I give you: Love one another. As I have loved you so you must love one another. By this all men will know that you are my disciples if you love one another.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_E,
    },
    {
        id: 2,
        title: "Love",
        reference: "1 John 3:18",
        verse:
            "Dear children, let us not love with words or tongue but with actions and in truth.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_E,
    },
    {
        id: 3,
        title: "Humility",
        reference: "Philippians 2:3-4",
        verse:
            "Do nothing out of selfish ambition or vain conceit, but in humility consider others better than yourselves. Each of you should look not only to your own interests, but also to the interests of others.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_E,
    },
    {
        id: 4,
        title: "Humility",
        reference: "1 Peter 5:5-6",
        verse:
            'Young men, in the same way be submissive to those who are older. All of you, clothe yourselves with humility toward one another, because, "God opposes the proud but gives grace to the humble." Humble yourselves, therefore, under God\'s mighty hand, that He may lift you up in due time.',
        memory_pack: MEMORY_VERSE_PACK.TMS_60_E,
    },
    {
        id: 5,
        title: "Purity",
        reference: "Ephesians 5:3",
        verse:
            "But among you there must not be even a hint of sexual immorality, or of any kind of impurity, or of greed, because these are improper for God's holy people.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_E,
    },
    {
        id: 6,
        title: "Purity",
        reference: "1 Peter 2:11",
        verse:
            "Dear friends, I urge you, as aliens and stranger in the world, to abstain from sinful desires, which war against your soul.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_E,
    },
    {
        id: 7,
        title: "Honesty",
        reference: "Leviticus 19:11",
        verse: "Do not steal. Do not lie. Do not deceive one another.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_E,
    },
    {
        id: 8,
        title: "Honesty",
        reference: "Acts 24:16",
        verse: "So I strive always to keep my conscience clear before God and man.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_E,
    },
    {
        id: 9,
        title: "Faith",
        reference: "Hebrews 11:6",
        verse:
            "And without faith, it is impossible to please God, because anyone who comes to Him must believe that He exists and that He rewards those who earnestly seek Him.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_E,
    },
    {
        id: 10,
        title: "Faith",
        reference: "Romans 4:20-21",
        verse:
            "Yet he did not waver through unbelief regarding the promise of God, but was strengthened in his faith and gave glory to God, being fully persuaded that God had power to do what He had promised.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_E,
    },
    {
        id: 11,
        title: "Good Works",
        reference: "Galatians 6:9-10",
        verse:
            "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_E,
    },
    {
        id: 12,
        title: "Good Works",
        reference: "Matthew 5:16",
        verse:
            "In the same way, let your light shine before men, that they may see your good deeds and praise your Father in heaven.",
        memory_pack: MEMORY_VERSE_PACK.TMS_60_E,
    },
];
