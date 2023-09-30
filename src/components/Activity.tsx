import { Container, SVG, Text } from "@coconut-xr/koestlich";
import useHover from "../hooks/useHover";
import colors from "../theme/colors";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";

const { format } = Intl.DateTimeFormat("en-EN", {
  dateStyle: "short",
  timeStyle: "short"
});

function Activity() {
  const [entries, setEntries] = useState([getEntry()]);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setEntries((currentEntries) => {
          const newEntries = currentEntries.slice();
          newEntries.unshift(getEntry());
          return newEntries;
        }),
      15000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      flexShrink={1}
      flexDirection="column"
      width="100%"
      marginTop={12}
      overflow="scroll"
    >
      <Text
        fontSize={6}
        color={colors.primary12}
        marginBottom={4}
        id="title"
        index={0}
      >
        Activity
      </Text>
      {entries.map((entry, index) => (
        <Item {...entry} key={entry.id} id={entry.id} index={index + 1} />
      ))}
    </Container>
  );
}

interface ItemProps extends ComponentPropsWithoutRef<typeof Container> {
  icon: string;
  label: string;
  date: Date;
}

function Item({ icon, label, date, ...props }: ItemProps) {
  const { isHovered, hoverProps } = useHover();

  return (
    <Container
      {...props}
      flexDirection="row"
      alignItems="center"
      paddingY={3}
      translateZ={isHovered ? 8 : 0}
      {...hoverProps}
    >
      <Container
        height={14}
        width={14}
        alignItems="center"
        justifyContent="center"
        borderRadius={5}
        backgroundOpacity={1}
        backgroundColor={colors.primary5}
      >
        <SVG url={icon} height={6} width={6} color={colors.primary12} />
      </Container>
      <Container marginLeft={6} flexShrink={1}>
        <Text fontSize={4.5} color={colors.primary12}>
          {label}
        </Text>
        <Text fontSize={3.5} color={colors.neutral11}>
          {format(date)}
        </Text>
      </Container>
    </Container>
  );
}

const splashTexts = [
  "As seen on TV!",
  "Awesome!",
  "100% pure!",
  "May contain nuts!",
  "More polygons!",
  "Moderately attractive!",
  "Limited edition!",
  "Flashing letters!",
  "It's here!",
  "Best in class!",
  "It's finished!",
  "Kind of dragon free!",
  "Excitement!",
  "More than 500 sold!",
  "One of a kind!",
  "Heaps of hits on YouTube!",
  "Indev!",
  "Spiders everywhere!",
  "Check it out!",
  "Holy cow, man!",
  "It's a game!",
  "Made in Sweden!",
  "Uses LWJGL!",
  "Reticulating splines!",
  "Minecraft!",
  "Yaaay!",
  "Singleplayer!",
  "Keyboard compatible!",
  "Ingots!",
  "Exploding creepers!",
  "That's no moon!",
  "l33t!",
  "Create!",
  "Survive!",
  "Dungeon!",
  "Exclusive!",
  "The bee's knees!",
  "Closed source!",
  "Classy!",
  "Wow!",
  "Not on steam!",
  "Oh man!",
  "Awesome community!",
  "Pixels!",
  "Teetsuuuuoooo!",
  "Kaaneeeedaaaa!",
  "Now with difficulty!",
  "Enhanced!",
  "90% bug free!",
  "Pretty!",
  "12 herbs and spices!",
  "Fat free!",
  "Absolutely no memes!",
  "Free dental!",
  "Ask your doctor!",
  "Minors welcome!",
  "Cloud computing!",
  "Legal in Finland!",
  "Hard to label!",
  "Technically good!",
  "Bringing home the bacon!",
  "Indie!",
  "GOTY!",
  "Ceci n'est pas une title screen!",
  "Euclidian!",
  "Now in 3D!",
  "Inspirational!",
  "Herregud!",
  "Complex cellular automata!",
  "Yes, sir!",
  "Played by cowboys!",
  "OpenGL 2.1 (if supported)!",
  "Thousands of colors!",
  "Try it!",
  "Age of Wonders is better!",
  "Try the mushroom stew!",
  "Sensational!",
  "Hot tamale, hot hot tamale!",
  "Play him off, keyboard cat!",
  "Guaranteed!",
  "Macroscopic!",
  "Bring it on!",
  "Random splash!",
  "Call your mother!",
  "Monster infighting!",
  "Loved by millions!",
  "Ultimate edition!",
  "Freaky!",
  "You've got a brand new key!",
  "Water proof!",
  "Uninflammable!",
  "Whoa, dude!",
  "All inclusive!",
  "Tell your friends!",
  "NP is not in P!",
  "Music by C418!",
  "Livestreamed!",
  "Haunted!",
  "Polynomial!",
  "Terrestrial!",
  "All is full of love!",
  "Full of stars!",
  "Scientific!",
  "Not as cool as Spock!",
  "Collaborate and listen!",
  "Never dig down!",
  "Take frequent breaks!",
  "Not linear!",
  "Han shot first!",
  "Nice to meet you!",
  "Buckets of lava!",
  "Ride the pig!",
  "Larger than Earth!",
  "sqrt(-1) love you!",
  "Phobos anomaly!",
  "Punching wood!",
  "Falling off cliffs!",
  "1% sugar!",
  "150% hyperbole!",
  "Synecdoche!",
  "Let's danec!",
  "Seecret Friday update!",
  "Reference implementation!",
  "Kiss the sky!",
  "20 GOTO 10!",
  "Verlet intregration!",
  "Peter Griffin!",
  "Do not distribute!",
  "Cogito ergo sum!",
  "4815162342 lines of code!",
  "A skeleton popped out!",
  "The sum of its parts!",
  "BTAF used to be good!",
  "I miss ADOM!",
  "umop-apisdn!",
  "OICU812!",
  "Bring me Ray Cokes!",
  "Finger-licking!",
  "Thematic!",
  "Pneumatic!",
  "Sublime!",
  "Octagonal!",
  "Une baguette!",
  "Gargamel plays it!",
  "Rita is the new top dog!",
  "SWM forever!",
  "Representing Edsbyn!",
  "Matt Damon!",
  "Supercalifragilisticexpialidocious!",
  "Consummate V's!",
  "Cow Tools!",
  "Double buffered!",
  "Fan fiction!",
  "Flaxkikare!",
  "Jason! Jason! Jason!",
  "Hotter than the sun!",
  "Internet enabled!",
  "Autonomous!",
  "Engage!",
  "Fantasy!",
  "DRR! DRR! DRR!",
  "Kick it root down!",
  "Regional resources!",
  "Woo, facepunch!",
  "Woo, somethingawful!",
  "Woo, /v/!",
  "Woo, tigsource!",
  "Woo, worldofminecraft!",
  "Woo, reddit!",
  "Woo, 2pp!",
  "Google anlyticsed!",
  "Now supports åäö!",
  "Give us Gordon!",
  "Tip your waiter!",
  "Very fun!",
  "12345 is a bad password!",
  "Vote for net neutrality!",
  "Lives in a pineapple under the sea!",
  "MAP11 has two names!",
  "Omnipotent!",
  "Gasp!",
  "...!",
  "Bees, bees, bees, bees!",
  "Jag känner en bot!",
  "This text is hard to read if you play the game at the default resolution, but at 1080p it's fine!",
  "Haha, LOL!",
  "Hampsterdance!",
  "Menger sponge!",
  "idspispopd!",
  "Eple (original edit)!",
  "So fresh, so clean!",
  "Slow acting portals!",
  "Try the Nether!",
  "Don't look directly at the bugs!",
  "Oh, ok, Pigmen!",
  "Finally with ladders!",
  "Scary!",
  "Play Minecraft, Watch Topgear, Get Pig!",
  "Twittered about!",
  "Jump up, jump up, and get down!",
  "Joel is neat!",
  "A riddle, wrapped in a mystery!",
  "This parrot is no more! It has ceased to be!",
  "Welcome to your Doom!",
  "Stay a while, stay forever!",
  "Stay a while and listen!",
  "Treatment for your rash!",
  '"Autological" is!',
  "Information wants to be free!",
  '"Almost never" is an interesting concept!',
  "Lots of truthiness!",
  "The creeper is a spy!",
  "Turing complete!",
  "It's groundbreaking!",
  "Let our battle's begin!",
  "The sky is the limit!",
  "Jeb has amazing hair!",
  "Ryan also has amazing hair!",
  "Casual gaming!",
  "Undefeated!",
  "Kinda like Lemmings!",
  "Follow the train, CJ!",
  "Leveraging synergy!",
  "This message will never appear on the splash screen, isn't that weird?",
  "DungeonQuest is unfair!",
  "90210!",
  "Check out the far lands!",
  "Tyrion would love it!",
  "Also try VVVVVV!",
  "Also try Super Meat Boy!",
  "Also try Terraria!",
  "Also try Mount And Blade!",
  "Also try Project Zomboid!",
  "Also try World of Goo!",
  "Also try Limbo!",
  "Also try Pixeljunk Shooter!",
  "Also try Braid!",
  "That's super!",
  "Bread is pain!",
  "Read more books!",
  "Khaaaaaaaaan!",
  "Less addictive than TV Tropes!",
  "More addictive than lemonade!",
  "Bigger than a bread box!",
  "Millions of peaches!",
  "Fnord!",
  "This is my true form!",
  "Don't bother with the clones!",
  "Pumpkinhead!",
  "Made by Jeb!",
  "Has an ending!",
  "Finally complete!",
  "Feature packed!",
  "Boots with the fur!",
  "Stop, hammertime!",
  "Testificates!",
  "Conventional!",
  "Homeomorphic to a 3-sphere!",
  "Doesn't avoid double negatives!",
  "Place ALL the blocks!",
  "Does barrel rolls!",
  "Meeting expectations!",
  "PC gaming since 1873!",
  "Ghoughpteighbteau tchoghs!",
  "Déjà vu!",
  "Déjà vu!",
  "Got your nose!",
  "Haley loves Elan!",
  "Afraid of the big, black bat!",
  "Doesn't use the U-word!",
  "Child's play!",
  "See you next Friday or so!",
  "From the streets of Södermalm!",
  "150 bpm for 400000 minutes!",
  "Technologic!",
  "Funk soul brother!",
  "Pumpa kungen!",
  "日本ハロー！",
  "한국 안녕하세요!",
  "Helo Cymru!",
  "Cześć Polsko!",
  "你好中国！",
  "Привет Россия!",
  "Γεια σου Ελλάδα!",
  "My life for Aiur!",
  "Lennart lennart = new Lennart();",
  "I see your vocabulary has improved!",
  "Who put it there?",
  "You can't explain that!",
  "if not ok then return end",
  "§1C§2o§3l§4o§5r§6m§7a§8t§9i§ac",
  "§kFUNKY LOL",
  "Big Pointy Teeth!",
  "Bekarton guards the gate!",
  "Mmmph, mmph!",
  "Don't feed avocados to parrots!",
  "Swords for everyone!",
  "Plz reply to my tweet!",
  ".party()!",
  "Take her pillow!",
  "Put that cookie down!",
  "Pretty scary!",
  "I have a suggestion.",
  "Now with extra hugs!",
  "Now Java 8!",
  "Woah.",
  "HURNERJSGER?",
  "What's up, Doc?",
  "Now contains 32 random daily cats!",
  "That's Numberwang!",
  "pls rt",
  "Do you want to join my server?",
  "Put a little fence around it!",
  "Throw a blanket over it!",
  "One day, somewhere in the future, my work will be quoted!",
  "Now with additional stuff!",
  "Extra things!",
  "Yay, puppies for everyone!",
  "So sweet, like a nice bon bon!",
  "Very influential in its circle!",
  "Now With Multiplayer!",
  "Rise from your grave!",
  'Warning! A huge battleship "STEVE" is approaching fast!',
  "Blue warrior shot the food!",
  "Run, coward! I hunger!",
  "Flavor with no seasoning!",
  "Strange, but not a stranger!",
  "Tougher than diamonds, rich like cream!",
  "It swings, it jives!",
  "Cruising streets for gold!",
  "Take an eggbeater and beat it against a skillet!",
  "Make me a table, a funky table!",
  "Take the elevator to the mezzanine!",
  "Stop being reasonable, this is the Internet!",
  "/give @a hugs 64",
  "This is good for Realms.",
  "Any computer is a laptop if you're brave enough!",
  "Do it all, everything!",
  "Where there is not light, there can spider!",
  "GNU Terry Pratchett",
  "More Digital!",
  "doot doot",
  "Falling with style!",
  "There's no stopping the Trollmaso",
  "Throw yourself at the ground and miss",
  "Rule #1: it's never my fault",
  "Replaced molten cheese with blood?",
  "Absolutely fixed relatively broken coordinates",
  "Boats FTW",
  "Javalicious edition",
  "Should not be played while driving",
  "You're going too fast!",
  "Don't feed chocolate to parrots!",
  "The true meaning of covfefe",
  "An illusion! What are you hiding?",
  "Something's not quite right...",
  "Thank you for the fish!",
  "All rumors are true!",
  "Truly gone fishing!",
  "Rainbow turtle?",
  "Something funny!",
  "I need more context.",
  "Ahhhhhh!",
  "Don't worry, be happy!",
  "Water bottle!",
  "What's the question?",
  "Plant a tree!",
  "Go to the dentist!",
  "What do you expect?",
  "Look mum, I'm in a splash!",
  "It came from space.",
  "Awesome game design right there!",
  "Ph1lza had a good run!",
  "10 years of Mining and Crafting!",
  "Ping the human!",
  "In case it isn't obvious, foxes aren't players.",
  "Buzzy Bees!",
  "Minecraft Java Edition presents: Disgusting Bugs",
  "Wash your hands!",
  "Soap and water!",
  "Support local businesses!",
  "Stay home and play games!",
  "Stay safe!",
  "Stay strong!",
  "Cough or sneeze into your elbow!",
  "Don’t touch your face!",
  "Support elderly relatives and friends!",
  "Prepare, but don’t hoard!",
  "Gamers unite – separately in your own homes!",
  "Save the world – stay inside!",
  "Shop for your elders!",
  "Hang out with your friends online!",
  "Honey, I grew the bees!",
  "Find your claw!",
  "Everybody do the Leif!",
  "<3 Max & 99 & Ducky!",
  "Bushy eyebrows!",
  "Edit is a name!",
  "From free range developers!",
  "Music by Lena Raine!",
  "Aww man!",
  "#minecraftfarms",
  "And my pickaxe!",
  "Envision! Create! Share!",
  "Fabulous graphics!",
  "Also try Minecraft Dungeons!",
  "Vanilla!",
  "May contain traces of citrus!",
  "Zoglin!?",
  "Black lives matter!",
  "Be anti-racist!",
  "Learn about allyship!",
  "Speak OUT against injustice and UP for equality!",
  "Amplify and listen to BIPOC voices!",
  "Educate your friends on anti-racism!",
  "Support the BIPOC community and creators!",
  "Stand up for equality in your community!"
];

const icons = [
  "calendar.svg",
  "clipboard-check.svg",
  "clock.svg",
  "entertainment.svg",
  "file.svg",
  "graph.svg",
  "home.svg",
  "mail.svg",
  "menu.svg",
  "message.svg",
  "money.svg",
  "notification.svg",
  "payment.svg",
  "pie.svg",
  "settings.svg",
  "users.svg",
  "wallet.svg"
];

function getRandom<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

let id = 0;

function getEntry() {
  return {
    id: `${id++}`,
    icon: getRandom(icons),
    label: getRandom(splashTexts),
    date: new Date()
  };
}

export default Activity;
