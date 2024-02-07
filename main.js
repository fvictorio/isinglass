/* ~~Dear reader~~
 *
 * You should know that I know this code sucks. But writing spaghetti
 * vanilla js now and then is good for your soul.
 *
 * Love,
 *   Me.
 */

const notes = {
  dict: {
    ["loom"]:
      "<i>loom:</i> To appear indistinctly, e.g. when seen on the horizon or through the murk.",
    ["spleen"]: "<i>spleen:</i> Bad mood.",
    ["on-shore"]: "<i>on shore:</i> On land, as opposed to being at sea.",
    ["hypo"]:
      "<i>hypo:</i> Melancholy; a fit of hypochondria; a morbid depression.",
    ["ball"]: "<i>ball:</i> Bullet.",
    ["city-of-the-manhattoes"]: `<a href="https://en.wikipedia.org/wiki/Manhattan" target="_blank">Manhattan</a>`,
    ["surf"]: `<i>surf:</i> Waves that break on an ocean shoreline.`,
    ["waterward"]: `<i>waterward:</i> In the direction of the water.`,
    ["battery"]: `<i>battery:</i> An elevated platform on which cannon could be placed.`,
    ["circumambulate"]: `<i>circumambulate:</i> To walk around something in a circle, especially for a ritual purpose.`,
    ["sabbath"]: `<i>sabbath:</i> (In Christianity) Sunday, day of rest and worship.`,
    ["reverie"]: `<i>reverie:</i> daydream.`,
    ["spile"]: `<i>spile:</i> Large wooden piles for support.`,
    ["pier-head"]: `<i>pier-head:</i> The end of a pier farthest from shore.<br/><br/><i>pier.</i> A raised platform built from the shore out over water, supported on piles; used to secure, or provide access to shipping.`,
    ["bulwark"]: `<i>bulwark:</i> The sides of the ship above the deck.`,
    ["aloft"]: `<i>aloft:</i> In the top.`,
    ["rigging"]: `<i>rigging:</i> The ropes, chains, etc. that support the masts and spars of a sailing vessel.`,
    ["peep"]: `<i>peep:</i> A quick look or glimpse, especially a furtive one.`,
    ["pent-up"]: `<i>pent up:</i> Imprisoned.`,
    ["lath-and-plaster"]: `<i>lath and plaster:</i> Building process used to finish mainly interior dividing walls and ceilings.`,
    ["loiter"]: `<i>loiter:</i> To stand about without any aim or purpose; to stand about idly.`,
    ["lee"]: `<i>lee:</i> The side away from the wind.`,
    ["yonder-adjective"]: `<i>yonder:</i> The farther, the more distant of two or more choices.<br/><br/><i>Do you see yonder ship?</i>`,
    ["nigh"]: `<i>nigh:</i> Near.`,
    ["thither"]: `<i>thither:</i> There, over there.`,
    ["dale"]: `<i>dale:</i> Valley.`,
    ["athirst"]: `<i>athirst:</i> Thirsty.`,
    ["saco"]: `<i>saco:</i> River in the United States. See <a href="https://en.wikipedia.org/wiki/Saco_River" target="_blank">Wikipedia</a>.`,
    ["want"]: `<i>want:</i> To be lacking or deficient or absent.`,
    ["must-needs"]: `<i>must needs:</i> Archaic phrase equivalent to "have to".`,
    ["rag"]: `<i>rag:</i> A piece of old cloth.`,
    ["salt"]: `<i>salt:</i> An experienced seaman.`,
    ["fowl"]: `<i>fowl:</i> A bird which is hunted or kept for food.`,
    ["river-horse"]: `<i>river horse:</i> Hippopotamus.`,
    ["ibis"]: `<i>ibis:</i> A group of long-legged birds. See <a href="https://en.wikipedia.org/wiki/Ibis" target="_blank">Wikipedia</a>.`,
    ["tar"]: `<i>tar:</i> A black, oily, sticky, viscous substance, used at the time as a water repellent coating for boats, ships, and roofs.`,
    ["hunks"]: `<i>hunks:</i> An ungenerous, mean man.`,
    ["astern"]: `<i>astern:</i> Behind.`,
    ["part"]: `<i>part:</i> Position or role (especially in a play).`,
    ["patagonia"]: `<a href="https://en.wikipedia.org/wiki/Patagonia" target="_blank">Patagonia</a>, geographical region in the southern end of South America.`,
  },
  comment: {
    ["call-me-ishmael"]:
      "This is the first of many character names that come from the Bible.<br/><br/>Ishmael was the son of Abraham and Hagar, the handmaiden of Abraham's wife.<br/><br/>One interpretation of this name choice is that Moby-Dick's Ishmael is also an outcast from his family. While this is never explicitly said, it seems in character.",
    ["pistol-and-ball"]:
      "<i>Ball</i> here means bullet. Ishmael is saying that getting to sea is his substitute for commiting suicide.",
    ["are-the-green-fields-gone"]:
      "Ishmael wonders why are these landsmen here, and ironically asks why aren't they spending their time in the green fields. The end of this paragraph rhymes with the end of the next paragraph, where he also gives an implausible explanation.",
    ["the-needles-of-the-compasses"]:
      "See comment at the end of the previous paragraph.",
  },
  reference: {
    ["cato"]: `Cato refers to <a href="https://en.wikipedia.org/wiki/Cato_the_Younger" target="_blank">Cato the Younger</a>, who killed himself with his sword when he was about to be defeated by Julius Caesar.`,
    ["niagara"]: `<a href="https://en.wikipedia.org/wiki/Niagara_Falls" target="_blank">Niagara Falls</a>.`,
    ["poor-poet-of-tennessee"]: `The Norton Critical Edition says that the poet referenced here is unidentified, and that this might be just Melville making things up.`,
    ["a-separate-deity-for-the-sea"]: `<a href="https://en.wikipedia.org/wiki/Poseidon" target="_blank">Poseidon</a>.`,
    ["jove"]: `Alternate name for <a href="https://en.wikipedia.org/wiki/Jupiter_(god)" target="_blank">Jupiter</a>, the roman equivalent of <a href="https://en.wikipedia.org/wiki/Zeus" target="_blank">Zeus</a>.`,
    ["narcissus"]: `<a href="https://en.wikipedia.org/wiki/Narcissus_(mythology)" target="_blank">Narcissus</a>, in Greek mythology, was a beautiful youth who fell in love with an image in a pool of water, not realizing it was a reflection of himself.`,
    ["van-rensselaers"]: `The <a href="https://en.wikipedia.org/wiki/Van_Rensselaer_family" target="_blank">Van Rensselaer family</a> was a prominent family of Dutch descent. Herman Melville was a descendant of this family<br/><br/>

  The <a href="https://en.wikipedia.org/wiki/Randolph_family_of_Virginia" target="_blank">Randolph family</a> was an important political family in Virginia. Thomas Jefferson was one of its most famous members.<br/><br/>

"Hardicunates" refers to the <a href="https://en.wikipedia.org/wiki/House_of_Kn%C3%BDtlinga" target="_blank">House of Knýtlinga</a>, a Danish royal house.`,
    ["seneca-and-the-stoics"]: `A reference to <a href="https://en.wikipedia.org/wiki/Stoicism" target="_blank">stoicism</a> and <a href="https://en.wikipedia.org/wiki/Seneca_the_Younger" target="_blank">Seneca the Younger</a>, one of its most famous exponents.`,
    ["orchard-thieves"]: `<a href="https://en.wikipedia.org/wiki/Adam_and_Eve" target="_blank">Adam and Eve</a>.`,
    ["pythagorean-maxim"]: `It is said that Pythagoras advised his followers to abstain from eating beans because they caused flatulence (that is, "winds from astern"). This is a fart joke, and it's not the only one in the book.`,
    ["two-and-two"]: `A reference to animals going in "two and two unto Noah into <a href="https://en.wikipedia.org/wiki/Noah%27s_Ark" target="_blank">the ark</a>"; see <a href="https://www.biblegateway.com/passage/?search=Genesis%207&version=KJV#en-KJV-169" target="_blank">Genesis 7.9</a>.`,
    ["one-grand-hooded-phantom"]: `The white whale: Moby Dick.`,
  },
};

let showDefinitions = false;
let showReferences = false;
let showPersonalComments = false;

let allHighlightsShown = false;

function onCheckboxChanged() {
  const showDefinitionsCheckbox = document.querySelector("#show-definitions");
  const showReferencesCheckbox = document.querySelector("#show-references");
  const showPersonalCommentsCheckbox = document.querySelector(
    "#show-personal-comments"
  );

  allHighlightsShown = false;
  cancelParagraphTransitions();
  hideHiglights();
  hideNote();

  showDefinitions = showDefinitionsCheckbox.checked;
  showReferences = showReferencesCheckbox.checked;
  showPersonalComments = showPersonalCommentsCheckbox.checked;
}

function hideHiglights() {
  document
    .querySelectorAll("span.ig-show")
    .forEach((e) => e.classList.remove("ig-show"));
}

function hideNote() {
  const note = document.querySelector("#ig-note");
  note.classList.add("hidden");
}

function cancelParagraphTransitions() {
  document
    .querySelectorAll(".tmp-ig-hide")
    .forEach((e) => e.classList.remove("tmp-ig-hide"));
}

function isHighlightEnabled(highlight) {
  const kind = highlight.dataset.igKind;
  return (
    (kind === "comment" && showPersonalComments) ||
    (kind === "reference" && showReferences) ||
    (kind === "dict" && showDefinitions)
  );
}

function getAllHighlightsIn(element) {
  return [...element.querySelectorAll("[data-ig-kind]")].filter(
    isHighlightEnabled
  );
}

// run function when dot is pressed down
document.addEventListener("keydown", function (event) {
  if (event.key === "t" || event.key === "T") {
    allHighlightsShown = !allHighlightsShown;

    cancelParagraphTransitions();

    const allHighlights = getAllHighlightsIn(document);

    if (allHighlightsShown) {
      allHighlights.forEach((highlight) => {
        highlight.classList.add("ig-show");
      });
    } else {
      allHighlights.forEach((highlight) => {
        highlight.classList.remove("ig-show");
      });

      hideNote();
    }
  }
});

window.addEventListener("load", function () {
  // initialize the variables
  onCheckboxChanged();

  const highlights = document.querySelectorAll("[data-ig-kind]");

  highlights.forEach((highlight) => {
    highlight.addEventListener("click", function (evt) {
      if (!isHighlightEnabled(this)) {
        return;
      }

      cancelParagraphTransitions();

      const note = document.querySelector("#ig-note");
      const thisHighlightShown = this.classList.contains("ig-show");

      if (!allHighlightsShown) {
        document.querySelectorAll("[data-ig-kind]").forEach((highlight) => {
          highlight.classList.remove("ig-show");
        });

        if (thisHighlightShown) {
          note.classList.add("hidden");
          this.classList.remove("ig-show");
          evt.stopPropagation();
          return;
        } else {
          this.classList.add("ig-show");
        }
      }

      const noteKind = highlight.dataset.igKind;
      const noteKey = highlight.dataset.igKey;
      const noteContent = notes?.[noteKind]?.[noteKey];
      if (!noteContent) {
        window.alert(
          `No note of kind '${noteKind}' and key '${noteKey}' found`
        );
        evt.stopPropagation();
        return;
      }
      note.classList.remove("hidden");
      note.innerHTML = noteContent;

      // set the top to the same value as the top of the highlight
      note.style.top = highlight.offsetTop + "px";

      evt.stopPropagation();
    });
  });

  const paragraphs = document.querySelectorAll("#text-container p");

  paragraphs.forEach((paragraph) => {
    let timeout;
    paragraph.addEventListener("click", function () {
      if (allHighlightsShown) {
        return;
      }

      hideHiglights();
      hideNote();

      const paragraphHighlights = getAllHighlightsIn(paragraph);

      paragraphHighlights.forEach((highlight) => {
        highlight.classList.add("tmp-ig-show");
        highlight.classList.remove("tmp-ig-hide");
      });

      setTimeout(() => {
        paragraphHighlights.forEach((highlight) => {
          highlight.classList.add("tmp-ig-hide");
          highlight.classList.remove("tmp-ig-show");
        });
      });

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        paragraphHighlights.forEach((highlight) => {
          highlight.classList.remove("tmp-ig-hide");
        });
      }, 3000);
    });
  });

  const checkboxes = settings.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", onCheckboxChanged);
  });
});
