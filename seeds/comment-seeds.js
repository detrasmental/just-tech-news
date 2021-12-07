const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. ',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Padfoot snargaluff seeker:',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. ',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Fat Lady baubles banana fritters fairy lights Petrificus Totalus.',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'So thirsty, deluminator firs’ years follow me 12 inches of parchment.',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Head Boy start-of-term banquet Cleansweep Seven roaring lion hat.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Unicorn blood crossbow mars is bright tonight,',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. ',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'Fanged frisbees, phoenix tears good clean match.',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion.',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs.',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat.',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'win cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack.',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'Prophecies Yaxley green eyes Remembrall horcrux hand of the servant.',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Cabbage Daily Prophet letters from no one Dervish and Banges leg.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Nam tristique tortor eu pede.',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'Proin eu mi. Nulla ac enim.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Sed ante. Vivamus tortor.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Donec quis orci eget orci vehicula condimentum.',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'Maecenas ut massa quis augue luctus tincidunt.',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Cras in purus eu magna vulputate luctus.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Proin at turpis a pede posuere nonummy.',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'Proin risus. Praesent lectus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;