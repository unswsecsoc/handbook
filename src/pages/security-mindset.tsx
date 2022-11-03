import * as React from "react";
import PageTemplate from "../templates/PageTemplate.tsx";
import FreeTextScenario from "../components/FreeTextScenario.tsx";

// markup
const SecurityMindsetPage = () => {
  return (
    <PageTemplate>
      <div>
        <h1>Topic 1: The Security Mindset</h1>
        <p><em>What's the point of a state-of-the-art surveillance system when the person who's supposed to monitor it is asleep? What's the point of encrypting data securely if you make the keys publically available? And why people are getting so upset at us for leaking their driver's licences?</em></p>
        <h2 id="introduction">Introduction to Security</h2>
        <p>We need security. We need to make sure our stuff doesn't get tampered with, that our private documents don't get looked at, that our identities don't get stolen, that we get what we pay for, and so on. And since so much of our lives are online now, that security needs to extend to the digital world too. So, what do we have so far?</p>
        <p>Well, that's what COMP6441/COMP6841 covers. And one of the most foundational ideas is that of the <strong>security mindset</strong> -- because if you want to stop attackers, you have to <em>know what they want</em>, and you have to <em>know how they think.</em></p>
        <h2 id="complaining">But First: Complaining</h2>
        <p>Getting security right is hard -- it's a balance -- some things are more important than others</p>
        <h2 id="standard-vs-security">Standard Mindset vs Security Mindset</h2>
        <p>What is the security mindset about?
        <ul>
          <li><strong>Challenging assumptions</strong>: What assumptions did designers make when building their system? And can you exploit any of them? Did they assume that the user data wouldn't contain any special characters, or did they actually check?</li>
          <li><strong>Seeing the system as an organism</strong></li>
          <li><strong>Understanding the details</strong>: So the safe is locked -- what kind of lock is it? You're keeping access logs -- how often are they checked? Which version of SQL is that server running? The details matter in security.</li>
        </ul>
        </p>
        <h2 id="interactive">Now You Try!</h2>
        <FreeTextScenario />
      </div>
    </PageTemplate>
  )
}

export default SecurityMindsetPage;
