// src/Content.js
import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Content.css";

const poems = {
  option1: {
    poem: "अदिति, तुम्हारा नाम है एक रोशनी की किरण,तुम्हारी उपस्थिति से, जीवन होता है रोशन।हर लम्हा जो तुम्हारे संग बिताया,उसकी मिठास से भर जाती दिल की काया।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option2: {
    poem: "ध्रुविका, तुम्हारी दोस्ती थी एक अनमोल खजाना,तुम मेरी संरक्षक, बड़ी बहन की तरह सच्ची।हर कठिनाई में साथ, मेरे लिए एक किला,मैं हूँ दिल से आभारी, तुम्हारे प्यार और स्नेह का।कभी-कभी मेरी शरारतें और मूर्खताएँ,तुम्हें परेशान करतीं, मुझे अब समझ में आता है।तुम्हारा साथ हमेशा मेरे जीवन की एक ज्योति,तुम्हारे बिना अधूरा, तुम हो मेरे जीवन की रोटी।फिर से जुड़ने की चाहत, मेरे दिल की एक पुकार,तुम्हें खोने का दुख, कभी न सह सका ये प्यार।अगर कभी कोई गलती हो गई हो, मुझसे अनजाने में,तो माफी चाहता हूँ, तुमसे इस दिल से सच्चे।तुम मेरी सबसे अच्छी दोस्त, मेरी बड़ी बहन हो,हर खुशी में तुम्हारा साथ, हर दुख में तुम हो।अगर तुम यह पढ़ रही हो, तो धन्यवाद, अक्का, हर चीज़ के लिए।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option3: {
    poem: "वो है एक बेबाक, अद्वितीय अदाकारा,हर कदम पे उसका अपना ही ठाठ है।हर मुश्किल का सामना वो हिम्मत से करती है,ऐसी है मेरी बहन, अपने पर अभिमान करती है।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option4: {
    poem: "हमारी पसंद मिलती-जुलती, यह जानकर खुशी है,अब और करीब आने की है दिल में आरज़ू।दोस्ती की मिठास हर मुलाकात में हो,तुम्हारे संग बांटें खुशियां, हर बात में हो।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option5: {
    poem: "बचपन की वो सारी प्यारी यादें,संग तुम्हारे बिताए वो हंसी के दिन।तुम्हारे संग खेला, हँसा और रोया,वो अनमोल लम्हें, दिल के करीब हैं।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option6: {
    poem: "हम मिले और दोस्ती की नींव रखी,संपर्क कम सही, पर दिल में जगह है।संपर्क में रहना चाहूँ, ये ख्वाहिश है मेरी,मिलें या न मिलें, दोस्ती का बंधन रहे अडिग।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option7: {
    poem: "खून का रिश्ता नहीं, पर दिल का तो है,तुम्हारे संग हर पल की अपनी ही बात है।छोटी बहन सी, तुम्हारी हर खुशी में,साथ हूँ, मदद करूँ, मैं हर मुश्किल में।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option8: {
    poem: "छह साल की नन्ही परी, भोली-भाली सी,मासूमियत उसकी जैसे फूलों की कली।हर बात में प्यार, हर लफ़्ज़ में खुशी,मेरी प्यारी बहन, दुलारी, सजीली।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option9: {
    poem: "Meeting you was like finding a precious little sister,Your kindness and joy light up every conversation.I promise to stand by you through every challenge,And protect you with all my heart, my dear little friend.",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option10: {
    poem: "कोयल सी मीठी, तुम्हारी मुस्कान प्यारी,दिलों में बस जाती, जैसे नन्ही कोयल की तान।तुम्हारे संग हर पल लगता खुशियों का मेला,मधुर आवाज़ से जैसे जीवन का एक गीत सजीला।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option11: {
    poem: "खुशी, तुम्हारा नाम ही सब कह देता है,तुम्हारी हंसी से दिलों में उमंग भर जाता है।तुम्हारे संग हंसी की फुहारें बरसतीं,जीवन में तुम्हारी उपस्थिति से हर पल बसंती।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option12: {
    poem: "तीसरी कक्षा की दोस्ती, अब भी है बरकरार,तुम्हारी कामयाबी के लिए करता हूँ मैं दुआ।मुझे संभालती, मेरी शरारतों में,ऐसी हो तुम, सच्ची दोस्त सदा।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option13: {
    poem: "नव्या, तुम्हारे संग हर पल लगता नया,तुम्हारी सोच से खुलते नए रास्ते, नया सवेरा।तुम्हारी बातें जैसे ताज़ा हवा का झोंका,तुम्हारे संग है जीवन, हर दिन एक नया मौका।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option14: {
    poem: "रूपा मासी, तुम्हारी देखभाल का शुक्रिया,तुम्हारे स्नेह में मुझे मिला जीने का सहारा।तुम्हारा आभार, दिल से जताऊं, तुम्हारे बिना, मैं अधूरा सा।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option15: {
    poem: "तुम्हारी कामयाबी पर गर्व है,तुम हो मेरी प्रेरणा, मेरे लिए सदा खास।आभारी हूँ तुम्हारे सहयोग का,मेरी प्यारी बहन, हमेशा तुम्हारा साथ।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option16: {
    poem: "हमारी मुलाकात से सजी, ये प्यारी सी दोस्ती,मीठी सी बातें, हर पल हंसी की बूँदें।उम्मीद है ये दोस्ती, यूं ही कायम रहे,हमेशा साथ रहे, दूरियाँ न कभी आएं।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option17: {
    poem: "तुम्हारी हंसी में है मासूमियत की चमक,जैसे तितली की उड़ान में रंगों की लहर।हर मुलाकात में, तुम से चमकते हैं सितारे,तुम्हारी दोस्ती का एहसास, जैसे चाँद की रात प्यारे।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option18: {
    poem: "एक साल छोटी, पर हिम्मत की मिसाल,हर मुश्किल का सामना करती, अटल।ज़िन्दगी में उसकी, है हिम्मत की निशानी,मेरी बहन, मेरे लिए हमेशा प्रेरणा की।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
  option19: {
    poem: "तुम्हारे सहयोग का दिल से आभारी,तुमने हमेशा दिया साथ, जैसे एक मार्गदर्शक।तुम्हारी मदद से ही, मैं बना हूँ खास,मेरी प्यारी बहन, तुम्हारे प्यार का एहसास।",
    message:
      "कवि IS SORRY FOR CRINGE THNX FOR READING :3 AND HAFFY RAKASHBANDHAN🫂",
  },
};

function Content({ selectedOption }) {
  const { poem, message } = poems[selectedOption] || {};

  return (
    <CSSTransition
      in={!!selectedOption}
      timeout={300}
      classNames="content"
      unmountOnExit
    >
      <div className="content-container">
        {poem && <p>{poem}</p>}
        {message && <p>{message}</p>}
        {poem && (
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzJ1Z3BxZTU1bW9nYmJjb3hzcHlsZTh5Z3dtem0wNzZxbzFvbmtpNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GH8A2cMYibLbhT6SWC/giphy.gif"
            alt="Heart"
          />
        )}
      </div>
    </CSSTransition>
  );
}

export default Content;
