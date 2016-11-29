# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:

#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create!(username: "guest", password: "password", fname: "Guest", lname: "User");
jhauf = User.create!(username: "jhauf", password: "wGzbBuWq", fname: "Jane", lname: "Hauf");
jallan = User.create!(username: "jallan", password: "n86uVRe9", fname: "Jasmine", lname: "Allan");
jalsop = User.create!(username: "jalsop", password: "8YfgyBZB", fname: "Jennifer", lname: "Alsop");
janderson = User.create!(username: "janderson", password: "kncWvUsQ", fname: "Jessica", lname: "Anderson");
jarnold = User.create!(username: "jarnold", password: "ph8M6gXC", fname: "Joan", lname: "Arnold");
javery = User.create!(username: "javery", password: "uqpuKATG", fname: "Joanne", lname: "Avery");
jbailey = User.create!(username: "jbailey", password: "uZLbjesG", fname: "Julia", lname: "Bailey");
kbaker = User.create!(username: "kbaker", password: "MeKnEAUh", fname: "Karen", lname: "Baker");
kball = User.create!(username: "kball", password: "dgRepHE2", fname: "Katherine", lname: "Ball");
kbell = User.create!(username: "kbell", password: "nZMACvAn", fname: "Kimberly", lname: "Bell");
nberry = User.create!(username: "nberry", password: "2YNqrf9B", fname: "Nicholas", lname: "Berry");
oblack = User.create!(username: "oblack", password: "9JFZRyeT", fname: "Oliver", lname: "Black");
odaviszon = User.create!(username: "odaviszon", password: "Kq3ysKPg", fname: "Owen", lname: "Daviszon");
pbond = User.create!(username: "pbond", password: "J5uy7SXA", fname: "Paul", lname: "Bond");
pbower = User.create!(username: "pbower", password: "G3Re7EZ6", fname: "Peter", lname: "Bower");
pbrown = User.create!(username: "pbrown", password: "vQ2Qc9p3", fname: "Phil", lname: "Brown");
pbuckland = User.create!(username: "pbuckland", password: "jXhLb8XS", fname: "Piers", lname: "Buckland");
rburgess = User.create!(username: "rburgess", password: "bD47Udm9", fname: "Richard", lname: "Burgess");
rbutler = User.create!(username: "rbutler", password: "eYRmp7Ks", fname: "Robert", lname: "Butler");
rcameron = User.create!(username: "rcameron", password: "Qc3DxPWL", fname: "Ryan", lname: "Cameron");


Campaign.create!(name: "Monty's Deli", goal_amt: 50000, current_amt: 0, description: "An authentic Jewish delicatessen open seven days a week, where traditional recipes are made expertly in house with great love and care.", end_date: "2017/05/15", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478463645/montys_uxvsqs.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478543687/avlf4tr9gfledepdezwn.png", campaigner_id: 20, category: "restaurant")
Campaign.create!(name: "ChocAmo Cookie Cups | Sip. Bite. Feed Your Soul.", goal_amt: 18000, current_amt: 0, description: "Join the snack time revolution and experience everyone's favorite childhood dessert with a modern twist! #loveatfirstbite", end_date: "2017/08/26", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478466148/cookie_sxw8os.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478488379/chocamo_irxxoy.png", campaigner_id: 5, category: "baked_goods")
Campaign.create!(name: "Comme Chez Moi by Minoofi", goal_amt: 2299, current_amt: 0, description: "Minoofi Bakery's cookbook full of recipes to entertain your nearest and dearest with. Brunch, Afternoon Tea, Cocktail Hour & Party.", end_date: "2017/04/01", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478489575/minoofibakery_lwunfy.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478489501/minofibakery_hqfokj.jpg", campaigner_id: 6, category: "baked_goods")
Campaign.create!(name: "House Cocktail Journal", goal_amt: 15000, current_amt: 0, description: "A stunning, hardback, water-resistant journal for recording cocktail recipes. Space for over 150 drinks, separated by spirit.", end_date: "2017/08/15", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478464278/cocktail_ttuikr.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478488360/cocktail_d6luok.jpg", campaigner_id: 19, category: "alcoholic_bev")
campaign3 = Campaign.create!(name: "Ogre Sauce - All-Purpose Craft BBQ Sauce", goal_amt: 6000, current_amt: 0, description: "Tastes great on everything like ribs, wings, salmon, pizza, burgers, tofu, oysters, pretzels, steak, grilled veggies, pineapple, eggs.", end_date: "2017/7/12", video_url: 'http://res.cloudinary.com/dps0ohgkp/video/upload/v1478463570/ogre_pexyyi.mp4', picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478488376/ogresauce_apslmq.jpg", campaigner_id: 4, category: "for_the_home");
Campaign.create!(name: "When London meets Berlin for brünch", goal_amt: 12000, current_amt: 0, description: "From pop up to permanent - We are opening London's first Berlin brünch Cafe in London Fields!", end_date: "2017/05/10", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478461497/london_meets_berlin_pjb6y0.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478489630/berlin_kyhffh.jpg", campaigner_id: 2, category: "restaurant")
Campaign.create!(name: "Pies Are Awesome - Pie Guides", goal_amt: 1492, current_amt: 0, description: "Make your first pie an epic pie with the world's only Pie Guides", end_date: "2017/06/20", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478467638/pieguides_wfwpm1.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478488377/pies_l8je47.jpg", campaigner_id: 6, category: "baked_goods")
Campaign.create!(name: "Food for All: Help, Save & Eat", goal_amt: 50000, current_amt: 0, description: "An app that reduces food waste by allowing you to buy food that restaurants did not sell by the end of the day, up to 80% cheaper.", end_date: "2017/04/19", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478465340/foodforall_hjbmjr.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478488363/foodforall_fvmpdx.jpg", campaigner_id: 18, category: "philanthropic")
Campaign.create!(name: "The Palate Deck: Playing Cards for Beer Tasting", goal_amt: 30000, current_amt: 0, description: "Playing cards that offer beer information and casual tasting guidance for the many conversations that happen over beer.", end_date: "2017/05/01", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478467829/palettedeck_lmslj0.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478489131/palatedeck_w0mdy5.jpg", campaigner_id: 17, category: "alcoholic_bev")
Campaign.create!(name: "The Rwanda Craft Brewery Project", goal_amt: 70000, current_amt: 0, description: "The Rwanda Craft Brewery Project", end_date: "2017/03/06", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478465837/rwanda_cincce.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478488378/rwanda_kh2py0.jpg", campaigner_id: 7, category: "philanthropic")
Campaign.create!(name: "A LoveLee Kitchen", goal_amt: 35000, current_amt: 0, description: "We are building a LoveLee kitchen to support our family, carb love, and community.... in our backyard.", end_date: "2017/08/01", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478465384/aloveleekitchen_lywlkz.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478489347/lovelee_ap0kln.png", campaigner_id: 8, category: "baked_goods")
Campaign.create!(name: "Benji's Farm - Plant-Powered Organic Dog Treats", goal_amt: 2000, current_amt: 0, description: "Your dog deserves more than just a tasty snack! Discover how our treats harness the Power of Plants to help support doggy wellness.", end_date: "2017/02/22", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478467687/dogtreat_bqijhk.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478488362/dogtreat_qu2s8m.jpg", campaigner_id: 16, category: "for_the_home")
Campaign.create!(name: "CHiP Smart Cookie Oven—Fresh Cookies in Under 10 Minutes", goal_amt: 100000, current_amt: 0, description: "The CHiP Smart Cookie Oven will bake perfect gourmet cookies in under 10 minutes.", end_date: "2017/02/06", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478465336/chipsmartcookieoven_ldy4q5.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478488421/smartcookie_y3nbdk.jpg", campaigner_id: 9, category: "for_the_home")
Campaign.create!(name: "Perfect Cookware for Everyone. Handcrafted in the USA.", goal_amt: 43000, current_amt: 0, description: "Marie + Merrill offers exceptional American-made cookware at a fair, transparent price.", end_date: "2017/04/07", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478484489/cookware_wk3ogr.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478488379/cookware_jpvsa5.png", campaigner_id: 10, category: "for_the_home")
Campaign.create!(name: "Shiraz the Cookbook", goal_amt: 6800, current_amt: 0, description: "In Shiraz, traditional and modern family recipes tell a story of inherited love through delicious Persian comfort food", end_date: "2017/03/16", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478484753/shiraz_cd1idh.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478488378/shiraz_q4rzlm.jpg", campaigner_id: 11, category: "for_the_home")
Campaign.create!(name: "Earnest Brew Works", goal_amt: 10000, current_amt: 0, description: "Earnest Brew Works is brewery and taproom located in Toledo, Ohio. Brewer-owned and operated, EBW will open in November", end_date: "2017/03/15", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478466052/earnestbrew_bcy6sa.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478489272/earnest_tey2ez.jpg", campaigner_id: 15, category: "alcoholic_bev")
Campaign.create!(name: "MONK’S vegan DELICATESSEN and KITCHEN", goal_amt: 50000, current_amt: 0, description: "Support our mission to bring great tasting, fresh food to Brooklyn at NY’s premier vegan delicatessen! #EatAtMonks #freshfoodtastesgood", end_date: "2017/06/22", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478466045/monk_s_maacsz.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478488368/monks_xeoq0n.jpg", campaigner_id: 14, category: "restaurant")
Campaign.create!(name: "Tripp's Tipples - Rock and Rye and other spirit infusions", goal_amt: 3600, current_amt: 0, description: "Creating a line of infusions that will take your spirits to the next level. We invite you to try our first...the Rock and Rye.", end_date: "2017/06/13", video_url: "http://res.cloudinary.com/dps0ohgkp/video/upload/v1478465650/rockandrye_solabj.mp4", picture_url: "http://res.cloudinary.com/dps0ohgkp/image/upload/v1478489637/trippstripples_uxhq1a.png", campaigner_id: 13, category: "alcoholic_bev")


Perk.create!(name: "Backer T-Shirt", donation_amt: "20", description: "This t-shirt has been designed by Mark exclusively for this Foodiegogo campaign and will only be available for the duration. Get it while it's hot!", campaign_id: 1)
Perk.create!(name: "Breakfast for two", donation_amt: "50", description: "Breakfast for two at our new restaurant. Coffee, pastries, bagels, and a special breakfast dish of salt beef, eggs and latkes.", campaign_id: 1)
Perk.create!(name: "A year of bagels", donation_amt: "100", description: "Half a dozen bagels a week, for a year! To collect from our new Deli.", campaign_id: 1)
Perk.create!(name: "Cookie Cup 6-pack", donation_amt: "20", description: "Receive a delicious 6-pack of assorted Cookie Cups! Just add your choice of milk, ice cream or liquor for all of your dessert dreams to come true!", campaign_id: 2)
Perk.create!(name: "Caffeination Kit", donation_amt: "50", description: "Be the first to try our ChocAmo Cookie Coffee Blend! Coffee + Cookie Cups = A tasty combo that’ll curb your sweet tooth and caffeine need all at once. Get a half pound of ChocAmo Blend Coffee, courtesy of High Point Roasters, a 12-pack of assorted Cookie Cups, AND an exclusive recipe list curated by our Chief Cookie Officer!", campaign_id: 2)
Perk.create!(name: "Cookie Cup Sundae Kit (BYOIC)", donation_amt: "100", description: "I scream, you scream, we all scream for ice cream (and Cookie Cups)! Receive an ice cream sundae kit with 18 Cookie Cups, a jar of ChocAmo Cookie Crumbles, and everything else you could possibly need for the perfect sundae, (minus the ice cream).This perk includes: Ice Cream Scoop, Rainbow Sprinkles, Oreo Crumbles, Gummy Worms, Chocolate Chips and 18 Cookie Cups", campaign_id: 2)
Perk.create!(name: "Digital E-Book", donation_amt: "20", description: "A massive thank you for your support! We will be receiving an abridged version of the printed book with bestselling recipes and tips.", campaign_id: 3)
Perk.create!(name: "Preorder Cookbook", donation_amt: "50", description: "For this pledge you receive a personal thank you and our utmost gratitude for supporting our project plus an unabridged hardback copy of the book!", campaign_id: 3)
Perk.create!(name: "The Ultimate Reward!", donation_amt: "400", description: "We'd be beyond grateful for a contribution this size. As an expression for our deep gratitude, you'll be mentioned as a special contributor in the book. You will also receive 3 signed cookbooks with free shipping. Plus you will have a personalised dinner and entertainment menu for up to 10 people designed by Yasmine and discussed over a Skype session.", campaign_id: 3)
Perk.create!(name: "Single set: 1 Journal", donation_amt: "20", description: "Start recording your favorite cocktail recipes in style. You will receive 1 copy of Spirit, Mixer, Glass & Garnish.", campaign_id: 4)
Perk.create!(name: "Twin Pack: 2 Journals", donation_amt: "50", description: "Make it a double! Receive 2 copies of Spirit, Mixer, Glass & Garnish.", campaign_id: 4)
Perk.create!(name: "Party Set: 5 Journals", donation_amt: "100", description: "Receive 5 copies of Spirit, Mixer, Glass & Garnish and make it a party.", campaign_id: 4)
Perk.create!(name: "16 oz Bottle", donation_amt: "20", description: "Backers get a 16 oz bottle and a sticker in time for the holidays. Taste great ion Turkey or Ham. Mmmmmm..ham.", campaign_id: 5)
Perk.create!(name: "6-Pack of Ogre Sauce", donation_amt: "50", description: "Just like a 6-pack of craft brew, you'll get six 16 oz bottles in a custom cardboard box. Great gift for Dad.", campaign_id: 5)
Perk.create!(name: "Ogre Pack: 12 Bottles, Gallon, Shirt.", donation_amt: "200", description: "Ogre Sauce T-shirt, 10 Ogre Sauce stickers, 1 Gallon Jug of Ogre Sauce, 1 Year Subscription of Ogre Sauce (12 16 oz bottles), Ogre Sauce cookbook.", campaign_id: 5)
Perk.create!(name: "A Berliner 'Stulle' on the house", donation_amt: "20", description: "Join us at brünch for a Berliner Stulle of your choice and a beautiful coffee from our Germany-based coffee roasters, fresh herbal tea or a freshly pressed juice.", campaign_id: 6)
Perk.create!(name: "Berlin Weekend brünch", donation_amt: "50", description: "Join us for a proper Berlin weekend brünch and choose between 'The Berliner' brünch platter or our rustic 'Farmer's Breakfast' with gorgeous bottomless sourdough and rye bread, unlimited coffee from our Germany-based coffee roasters, fresh herbal tea and guaranteed seats if you let us know in advance when you'd like to come.", campaign_id: 6)
Perk.create!(name: "Berlin Weekend brünch for Two", donation_amt: "100", description: "Join us for a proper Berlin weekend brünch for two and choose between 'The Berliner' brünch platter or our rustic Farmer's Breakfast with gorgeous bottomless sourdough and rye bread, unlimited coffee from our Germany-based coffee roasters or fresh herbal tea and guaranteed seats if you let us know in advance when you are coming.", campaign_id: 6)
Perk.create!(name: "One Powder Guide Kit of Your Choice", donation_amt: "20", description: "Choose from either the Math Butterflies or the Steampunk Caravan Powder Guide Kit designs, and make your first pie the most epic pie your friends have ever seen!", campaign_id: 7)
Perk.create!(name: "Set of 6 Pie Guides", donation_amt: "50", description: "Mix n' match Pie Guides to unlock max creativity with one of each. ($10 savings!)", campaign_id: 7)
Perk.create!(name: "The Ultimate Custom Pie Guide Kit", donation_amt: "999", description: "I will custom design a Powder Guide Kit of YOUR FACE that will allow you to immortalize yourself in pie... perfect for Wedding celebrations, birthdays, and graduations.", campaign_id: 7)
Perk.create!(name: "Save 4 meals", donation_amt: "20", description: "Enjoy 4 FFA meals, approx. 3 lbs, that would otherwise be wasted!", campaign_id: 8)
Perk.create!(name: "Save 8 meals + SURPRISE XMAS PRESENT", donation_amt: "50", description: "Enjoy 8 FFA meals, approx. 6 lbs, that would otherwise be wasted!", campaign_id: 8)
Perk.create!(name: "Save 28 meals + T-shirt", donation_amt: "250", description: "Enjoy 28 FFA meals, approx. 21 lbs, that would otherwise be wasted!", campaign_id: 8)
Perk.create!(name: "The Palate Deck", donation_amt: "30", description: "Your own copy of the 108 card Palate Deck: First Edition. Perfect for casual tasting and light gameplay at home or at breweries and taprooms.", campaign_id: 9)
Perk.create!(name: "The Palate Deck + Glassware Set", donation_amt: "70", description: "One copy of the Palate Deck, plus a set of 4 limited edition Palate Deck tasting glasses.", campaign_id: 9)
Perk.create!(name: "Tasting Room 10-Pack", donation_amt: "250", description: "10 copies of the Palate Deck. Perfect for bars, brewery tasting rooms, and staff training.", campaign_id: 9)
Perk.create!(name: "Rwandan Brewery Glass Set of 2", donation_amt: "20", description: "Rwandan Brewery Glass Set of 2, Instant Digital Download + Digital Thank You.", campaign_id: 10)
Perk.create!(name: "Rwanda Brewery T-Shirt", donation_amt: "50", description: "T-Shirt, Instant Digital Download + Digital Thank You.", campaign_id: 10)
Perk.create!(name: "Supporter Kit", donation_amt: "100", description: "T-Shirt, Glass Set of 2, Pub Coasters Set of 2, Rwandan Brewery Sticker, Instant Download + Digital Thank You!", campaign_id: 10)
Perk.create!(name: "Virtual Roll", donation_amt: "20", description: "This reward will give you more LoveLee love than you know what to do with! We’ll send you your very own virtual roll (Yes, you can name it whatever you’d like.),", campaign_id: 11)
Perk.create!(name: "Branded LoveLee", donation_amt: "50", description: "Lovelee Roll T-Shirt", campaign_id: 11)
Perk.create!(name: "Coffee with Mr. LoveLee Himself", donation_amt: "100", description: "Come to Starkville for a cup of coffee with Tyson “Mr. LoveLee” Lee - on him of course!", campaign_id: 11)
Perk.create!(name: "DOGGY LOVER", donation_amt: "20", description: "You are a true dog lover. When your puppy gets a whiff of these treats you are going to feel the love right back!", campaign_id: 12)
Perk.create!(name: "TASTE TESTER", donation_amt: "50", description: "You wouldn't leave your dog at home, why leave out one of our varieties! Try them all...and try EVERY product we launch, EVER!", campaign_id: 12)
Perk.create!(name: "SAAVY SUBSCRIBER", donation_amt: "100", description: "Your dog could eat 12 boxes of treats...at once! Spread the joy and get 1 box of treats per month, for 1 year! Anticipation is half the fun!", campaign_id: 12)
Perk.create!(name: "Crazy Good Cookie Dough", donation_amt: "50", description: "This is a Kickstarter only special! For a limited time and quantity, get $50 in cookie credits for only $45. Imagine all of the extra delicious cookies you can get!", campaign_id: 13)
Perk.create!(name: "Super Early Bird: CHiP", donation_amt: "100", description: "Super Early Bird special! Get CHiP for only $99.", campaign_id: 13)
Perk.create!(name: "Cookie Influencer (FREE CHiP)", donation_amt: 999, description: "Pre-purchase $999 in Cookie Credits and we'll name a cookie flavor after you, including a special description of the cookie, and sell it for a whole year!", campaign_id: 13)
Perk.create!(name: "8 inch SKILLET", donation_amt: 55, description: "The scrappiest of our skillets. Willing to take on big responsibility with smaller amounts of food.", campaign_id: 14)
Perk.create!(name: "10 inch SKILLET (nonstick)", donation_amt: 70, description: "The nonstick go-to for weekend brunch. Perfect for larger egg dishes, pancakes, and other meals that belong on your dish, not stuck to your cookware.", campaign_id: 14)
Perk.create!(name: "10 inch SAUTÉ PAN AND LID", donation_amt: 100, description: "Our pan with straight sides and a large cooking surface. Put a mean sear on meats and fish, reduce a sauce, or sauté all day.", campaign_id: 14)
Perk.create!(name: "A Copy of the Cookbook", donation_amt: 30, description: "A copy of the book, and a mention in the book.", campaign_id: 15)
Perk.create!(name: "Prints", donation_amt: 75, description: "A personalized copy of the book, a set of five postcards with photos from the book, and a mention in the book.", campaign_id: 15)
Perk.create!(name: "Meet and greet", donation_amt: 100, description: "Get coffee with the author herself", campaign_id: 15)
Perk.create!(name: "Printed Glassware", donation_amt: 20, description: "$25 backers will pick-up one of our 16 or 10 ounce beer glasses printed with our logo, in addition to the above rewards. Rewards must be picked up in person at the taproom.", campaign_id: 16)
Perk.create!(name: "Printed Growler", donation_amt: 50, description: "$50 backers will pick-up one of our 64 ounce printed growlers, in addition to the above rewards.", campaign_id: 16)
Perk.create!(name: "Party for 10 people", donation_amt: 500, description: "$500 backers will be able to invite 9 of their friends to a party at our taproom. We will be providing light snacks for your group, in addition to the above rewards for the backer.", campaign_id: 16)
Perk.create!(name: "Recipes, thanks and sandwiches!", donation_amt: 25, description: "Donors will have their name (or business) featured on our website’s list of backers, will receive our 2016 Monk’s Meats Recipe Zine as well as 2 sandwich vouchers!", campaign_id: 17)
Perk.create!(name: "Hats off to you!", donation_amt: 50, description: "Donors will receive name recognition, the 2016 Monk’s Recipe Zine, 2 sandwich vouchers as well as our sweet Monk’s Meats trucker hat.", campaign_id: 17)
Perk.create!(name: "Monk’s Meats all week!", donation_amt: 100, description: "Give a little and get it right back - your first $50 of Monk’s products is on us. Just flash your Monk’s membership punch card, which we will send to you.", campaign_id: 17)
Perk.create!(name: "One is never enough", donation_amt: 20, description: "In our experience a bottle of Rock and Rye has a tendency to disappear rather quickly. You better have two packages.", campaign_id: 18)
Perk.create!(name: "Take care of Christmas", donation_amt: 110, description: "Your stocking stuffer shopping is complete. Hit all the whiskey lovers in your life for Christmas with a dozen Rock and Rye infusions packs (that's 2 for free!)", campaign_id: 18)
Perk.create!(name: "The Deluxe Edition", donation_amt: 250, description: "Along with the Rock and Rye packs you will receive a beautiful set of all necessary equipment for making and serving the perfect Rock and Rye. Glass jar for infusing, bar spoon for stirring, stainless steel strainer and funnel for when its ready, decanter for displaying, 2 round ice cube moulds and 4 rocks glasses for serving.", campaign_id: 18)
