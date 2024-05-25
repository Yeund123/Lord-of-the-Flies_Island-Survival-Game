const decisions = [
    ["Ralph is elected leader of the boy group","Instead of Ralph, another character could have been elected as the leader of the group of boys"],
    ["Jack and his choir boys decide to become hunters instead of contributing to the creation of shelter","Jack and his choir boys could have decided to contribute to building shelters rather than becoming hunters"],
    ["The group decides to explore the island to see if it is really uninhabited","The group could have decided not to explore the island and instead stay in one place until they are rescued"],
    ["Ralph appoints Jack as the head of the hunter","Ralph could have appointed someone other than Jack as the head of the hunters"],
    ["Jack decides to paint his face with dark shades of clay and charcoal as a form of camouflage while hunting","Jack could have chosen not to paint his face with clay and charcoal, opting for a different form of camouflage while hunting"],
    ["The boys decide to fire flares at the top of the mountain to attract potential rescuers","The boys could have decided to use a different method to signal potential rescuers, such as creating a large visible sign"],
    ["Jack decided to use Piggy's glasses for flares","Instead of using Piggy's glasses for flares, they could have used them to start a controlled signal fire"],
    ["The boys don't keep using flares, so they miss a chance to rescue","The boys could have been more diligent in keeping the signal fire going to increase their chances of rescue"],
    ["Jack decides to leave Ralph's group and takes some of the boys to start his tribe","Jack could have chosen to stay with Ralph's group rather than leaving and starting his own tribe"],
    ["The boys decide to kill a mother pig, revealing a turning point for them to become barbaric","The boys could have decided not to kill any animals for food, opting for alternative food sources on the island"],
    ["Jack's tribe decides to steal the fire from Ralph's herd, destroying their temporary shelter","Jack's tribe could have chosen not to steal fire from Ralph's group, avoiding the destruction of their shelters"],
    ["The boys choose to reenact the hunt and have a feast to kill the captured pig","The boys could have held a feast without reenacting the hunt and killing a captured pig"],
    ["Ralph's group decides to face off in Castle Rock to find reason with Jack's tribe","Ralph's group could have decided not to confront Jack's tribe at Castle Rock and instead find a peaceful resolution"],
    ["In a chaotic frenzy, Simon is mistaken for a beast and decides to kill him","Instead of mistakenly killing Simon, the boys could have realized their mistake and stopped the attack"],
    ["Roger pushes a rock off a cliff, decides to deliberately kill Piggy and leads him to death","Roger could have decided not to deliberately kill Piggy, sparing his life"],
    ["Jack's tribe decides to hunt and kill Ralph, who has now become an outcast","Jack's tribe could have chosen not to hunt and kill Ralph, opting for peaceful coexistence"],
    ["Ralph decides to hide and avoid Jack's tribe while searching for him","Ralph could have decided to confront Jack's tribe directly rather than hiding and evading them"],
    ["Decided to set fire to the whole island to drive Ralph out","The boys could have found a different solution to drive Ralph out without setting the whole island on fire"],
    ["A naval officer's decision to rescue the boys ends the chaos and violence","The naval officer could have arrived earlier, preventing the escalation of violence and chaos on the island"]
];

const consequences = [
    ["Ralph, who was elected leader, initially offers the group a sense of order and organization, establishes rules and gives accountability","If someone else was elected leader instead of Ralph, the dynamics within the group could change drastically. The leadership style and decision-making of the new leader could lead to other conflicts and alliances between the boys"],
    ["Jack and his choir boys' decision to prioritize hunting over building shelters leads to a lack of adequate shelter for the group, making them vulnerable to these factors","If Jack and his choir boys had determined to contribute to the construction of the shelter rather than become hunters, the group would have a safer and more stable living environment. This would cultivate a stronger sense of unity and cooperation among the boys"],
    ["The decision to explore the island further intensifies the trapped feelings by revealing the boys' isolation and confirming that they are indeed alone","If the group had decided not to explore the island and stayed in one place instead, they might have missed out on a potential opportunity for its rescue or resources. However, they would have avoided the dangers and conflicts that arise during the expedition"],
    ["Ralph, who appointed Jack as the head of the hunter, influences Jack, leading to a split between leadership and priority-focused groups","If Ralph appoints someone other than Jack as the head of the hunter, the power dynamics within the group may change. Selected leaders may have different approaches to hunting and resource management, which may affect the survival strategies of the group"],
    ["Jack's decision to paint his face with dark shaded clay and charcoal symbolizes the loss of civilization and the descent into barbarism, blurring the boundaries between man and beast","If Jack chose not to paint his face with dirt and charcoal, the symbolic shift to barbarism might be less pronounced. This could affect Jack's and his followers' perceptions, potentially leading to other dynamics within the group"],
    ["The decision to fire flares to lure rescuers indicates boys who want to be rescued and boys who want to be saved on the island","If boys decide to use different methods to signal potential rescuers, such as large visible signs, the likelihood that they will be discovered and rescued depends on the effectiveness and visibility of the chosen method. This could change their rescue schedule or the attention they receive"],
    ["Jack's use of Pig's glasses for flares shows that the power struggle between him and Ralph is on the rise, ignoring the intellectual pursuit","If the boys had used Piggy's glasses to fire controlled flares rather than flares, they could have maintained a more consistent and visible signal. This would increase their chances of being rescued and potentially prevent them from losing Piggy's glasses"],
    ["If the boys are unable to consistently utilize flares, they miss the opportunity to rescue, prolonging their isolation and increasing their sense of despair","If the boys were more diligent in preventing the lights from going on, they would have been more likely to turn off passing boats or planes. This would increase their chances of being rescued and potentially shorten the time they spend on the island"],
    ["Jack's decision to leave Ralph's group and start his own tribe leads to a greater division among the boys and the formation of a section at odds with the power struggle","If Jack had decided to join the Ralphs, the power struggle between him and Ralph might have eased. While group dynamics might be more collaborative, Jack's desire for authority and domination could still build tension within the group"],
    ["The boys' decision to kill a mother pig represents a significant turning point in the loss of barbarity and innocence while enjoying violence and bloodshed","If the boys had decided not to kill animals for food, they would need to rely on alternative food sources, such as fruits, vegetables, or fishing, on the island. This could potentially affect their nutrition and survival strategies, leading to various challenges and resource management"],
    ["Jack's tribe stealing fire from Ralph's group further escalates the conflict between the two groups, destroying their hideouts, making them vulnerable","If Jack's tribe chose not to steal the fire from Ralph's herd, their residence would remain intact, ensuring safety and comfort. This could reduce the conflict between the two groups and potentially lead to more peaceful coexistence"],
    ["The boys' choice to reenact hunting and feasting on the caught pig represents a conscious celebration of violence, and further entrench their depravity into barbarism","The boys would have been able to celebrate together and bond without indulging in barbarism if they had feasted without re-enacting the hunt and killing the pig they had caught. By doing this, the boys were able to protect their morality and humanity, and avoid further innocence"],
    ["Determined to challenge Jack's tribe in Castle Rock, Ralph's group escalates the conflict and enhances the tension between the two zones","If Ralph's group had decided not to confront Jack's tribe at Castle Rock, they would have sought a peaceful solution or tried to negotiate with Jack's followers. This could potentially prevent further violence and division between the boys"],
    ["To mistake Simon for a beast and kill him in the wild world represents a total loss of reason and the boys plunging into unrestrained violence and chaos","If the boys realized their mistake and stopped attacking Simon, their tragic death could have been avoided. This could have a profound effect on the boys' collective conscience and their perception of their actions"],
    ["Roger's deliberate decision to kill Piggy removes one of the voices of reason and intelligence by revealing the total absence of morality and the triumph of barbarism","If Roger had deliberately decided not to kill Piggy, Piggy would have survived. This could maintain a rational voice and intellectual influence between the boys, potentially affecting their decision-making and group dynamics"],
    ["Jack's tribe decides to hunt and kill Ralph and strengthens his pursuit and threats against him, putting him on the brink of survival and highlighting the extremes of conflict","If Jack's tribe had decided not to hunt and kill Ralph, they would have sought peaceful coexistence or alternatives to resolve their differences. This would save Ralph's life and potentially lead to reconciliation between the boys"],
    ["Ralph's decision to hide and avoid Jack's tribe shows his despair and the path he takes to protect his life, while also underscoring the isolation and fear he experiences","If Ralph decides to confront Jack directly instead of hiding and avoiding his tribe, it would lead to direct confrontation, potentially escalating the conflict between the two factions. This could lead to increased violence between the boys and further division"],
    ["The decision to set fire to the entire island as a means of driving Ralph out destroys their only means of survival and furthers into chaos and destruction","If the boys had found another solution to drive Ralph away without setting an entire island on fire, they could have avoided the destruction of their only habitat. However, the chosen method could still lead to tension and conflict among the pack"],
    ["The naval officer's decision to rescue the boys ends the chaos and violence, in stark contrast to the island's barbarism and its return to civilization and order","If the naval officer had arrived earlier, he could have intervened and prevented the island's violence and chaos from growing. His presence would give him a sense of authority and restore order between the boys, potentially leading to a more peaceful resolution"]
];

let currentDecisionIndex = 0;
let selectedDecisionIndex = null;

function updateDecisionOptions() {
    const decision1 = document.getElementById('decision1');
    const decision2 = document.getElementById('decision2');

    const options = decisions[currentDecisionIndex];
    
    decision1.innerText = options[0];
    decision2.innerText = options[1];

    decision1.onclick = () => selectDecision(0);
    decision2.onclick = () => selectDecision(1);
    
    document.getElementById('next-btn').disabled = true;
    selectedDecisionIndex = null;

    decision1.classList.remove('selected');
    decision2.classList.remove('selected');
}

function selectDecision(choiceIndex) {
    selectedDecisionIndex = choiceIndex;

    const decision1 = document.getElementById('decision1');
    const decision2 = document.getElementById('decision2');

    decision1.classList.remove('selected');
    decision2.classList.remove('selected');

    if (choiceIndex === 0) {
        decision1.classList.add('selected');
    } else {
        decision2.classList.add('selected');
    }

    document.getElementById('next-btn').disabled = false;
}

function showConsequence() {
    if (selectedDecisionIndex !== null) {
        const consequence = consequences[currentDecisionIndex][selectedDecisionIndex];
        document.getElementById('consequence').innerText = `As the narrator explains: ${consequence}`;
    }
}

function nextDecision() {
    showConsequence();
    if (currentDecisionIndex < decisions.length - 1) {
        currentDecisionIndex++;
        updateDecisionOptions();
    } else {
        document.getElementById('game-description').innerText = 'You have made all decisions. Your adventure ends here.';
        document.getElementById('next-btn').disabled = true;
        document.getElementById('end-message').classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateDecisionOptions();
});
