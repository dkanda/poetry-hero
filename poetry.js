poetryCorpus = "once upon a midnight dreadry, while i pondered, weak and weary, over many a quaint and curious volume of forgotten lore, while i nodded, nearly napping, suddenly there came a tapping, as of someone gently rapping, rapping at my chamber door. tis some visitor, i muttered, tapping at my chamber door only this, and nothing more. ah, distinctly i remember, it was in the bleak december, and each separate dying ember wrought its ghost upon the floor. eagerly i wished the morrow vainly i had sought to borrow from my books surcease of surrow, sorrow for the lost lenore,. for the rare and radiant maiden whom the angels name lenore, nameless here forevermore. and the silken sad uncertain rustling of each purple curtain thrilled mefilled me with fantastic terrors never felt before so that now, to still the beating of my heart, i stood repeating, tis some visitor entreating entrance at my chamber door, some late visitor entreating entrance at my chamber door. this is it, and nothing more. presently my soul grew stronger hesitating then no longer, sir, said i, or madam, truly your forgiveness i implore but the fact is, i was napping, and so gently you came rapping, and so faintly you came tapping, tapping at my cham ber door, that i scarce was sure i heard you. here i opened wide the door darkness there, and nothing more. deep into the darkness peering, long i stood there, won dering, fearing doubting, dreaming dreams no mortals ever dared to dream before but the silence was unbroken, and the stillness gave no token, and the only word there spoken was the whispered word, lenore?, this i whispered, and an echo murmured back the word, lenore. merely this, and nothing more. back into the chamber turning, all my soul within me burning, soon again i heard a tapping, something louder than before, surely, said i, surely, that is something at my window lattice. let me see, then, what thereat is, and this mystery explore. let my heart be still a moment, and this mystery explore. tis the wind, and nothing more. open here i flung the shutter, when, with many a flirt and flutter, in there stepped a stately raven, of the saintly days of yore. not the least obeisance made he not a minute stopped or stayed he but with mien of lord or lady, perched above my cham ber door. perched upon a bust of pallas, just above my chamber door, perched, and sat, and nothing more. then this ebony bird beguiling my sad fancy into smiling, by the grave and stern decorum of the countenance it wore, though thy crest be shorn and shaven thou, i said, art sure no craven, ghastly, grim, and ancient raven, wandering from the nightly shore. tell me what the lordly name is on the nights pluton ian shore. quoth the raven, nevermore. much i marvelled this ungainly fowl to hear discourse so plainly, though its answer little meaning, little relevancy bore for we cannot help agreeing that no living human being ever yet was blessed with seeing bird above his cham ber door, bird or beast upon the sculptured bust above his cham ber door, with such name as nevermore. but the raven, sitting lonely on that placid bust, spoke only that one word, as if his soul in that one word he did outpour. nothing further then he uttered not a feather then he fluttered till i scarcely more than muttered,other friends have flown before on the morrow he will leave me, as my hopes have flown before. then the bird said,nevermore. startled at the stillness broken by reply so aptly spoken, doubtless, said i, what it utters is its only stock and store, caught from some unhappy master, whom unmerciful disaster followed fast and followed faster, till his songs one burden bore, till the dirges of his hope that melancholy burden bore of nevernevermore. but the raven still beguiling all my fancy into smiling, straight i wheeled a cushioned seat in front of bird and bust and door, then, upon the velvet sinking, i betook myself to linking fancy unto fancy, thinking what this ominous bird of yore, what this grim, ungainly, ghastly, gaunt, and ominous bird of yore meant in croaking, nevermore. thus i sat engaged in guessing, but no syllable expressing to the fowl, whose fiery eyes now burned into my bosoms core this and more i sat divining, with my head at ease re clining on the cushions velvet lining that the lamplight gloated oer, but whose velvet violet lining with the lamplight gloating oer she shall press, ah, nevermore. then, methought, the air grew denser, perfumed from an unseen censer swung by seraphim whose footfalls tinkled on the tufted floor. wretch, i cried, thy god hath lent thee  by these angels he hath sent thee respiterespite and nepenthe from thy memories of lenore. quaff, o quaff this kind nepenthe, and forget this lost lenore. quoth the raven, nevermore. prophet. said i, thing of evil.prophet still, if bird or devil. whether tempter sent, or whether tempest tossed thee here ashore, desolate, yet all undaunted, on this desert land enchanted on this home by horror hauntedtell me truly, i implore: is thereis there balm in gilead?tell metell me i im plore. quoth the raven, nevermore. prophet. said i, thing of evilprophet still, if bird or devil. by that heaven that bends above usby that god we both adore tell this soul with sorrow laden, if, within the distant aidenn, it shall clasp a sainted maiden, whom the angels name lenore clasp a rare and radiant maiden, whom the angels name lenore? quoth the raven, nevermore. be that word our sign of parting, bird or fiend. i shrieked, upstarting get thee back into the tempest and the nights pluton ian shore. leave no black plume as a token of that lie thy soul hath spoken. leave my loneliness unbroken.  quit the bust above my door. take thy beak from out my heart, and take thy form from off my door. quoth the raven, nevermore. and the raven, never flitting, still is sitting, still is sitting on the pallid bust of pallas just above my chamber door and his eyes have all the seeming of a demons that is dreaming. and the lamplight oer him streaming throws the shadow on the floor and my soul from out that shadow that lies floating on the floor shall be liftednevermore.";
poetryArr = poetryCorpus.split(/[\. ,]/)
var freqs = [];
function LoadFreqs() {
    var errFlag = false;
    for (i = 0; i < poetryArr.length - 1; i++) {
        if (freqs[poetryArr[i]] == undefined) {
            freqs[poetryArr[i]] = [];
        }
        try{
            freqs[poetryArr[i]].push(poetryArr[i + 1]);
        }
        catch (err) {
            errFlag = true;
        }
        finally {
            if(!errFlag)
            {
                console.log(poetryArr[i])
                freqs[poetryArr[i]].push(poetryArr[i + 1]);
            }
            errFlag = false;
        }
        

    }
    return freqs;
}

function GetTheNextWord(word)
{
	if(freqs[word] == undefined)
		return ".";
	else
		return freqs[word][Math.floor(Math.random()*freqs[word].length)];
}