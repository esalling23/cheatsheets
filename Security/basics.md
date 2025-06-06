# History of Cybersecurity Attacks

## Brain Virus

1986
Intention - track illegal copies of software & prevent pirated software

[See more](https://en.wikipedia.org/wiki/Brain_(computer_virus))

## Morris Worm

Program crawled web & installed itself on computers to track how many computers were used on the web
Continued to re-install itself multiple times instead of just once, killing computer memory & crashing the computers
Affected 10% of internet at the time - 6,000 computers

[See More](https://en.wikipedia.org/wiki/Morris_worm)

## Love Letter Attack

Aka the "ILOVEYOU virus"

In 2000 - sent people an email with a "love letter" attachment. Once opened, the attachment would scan the email contacts & send emails to each person on the list. That way when more people got the emails they would think they got one from a friend. 

Example of social engineering - exploits human behavior

## Equifax Breach

Lots of PII stolen
Equifax failed to set up preventative measures to protect against several known vulnerabilities
Cost them 500+ million in fees, etc. 
Alerted companies to the real $$$$$ impact of a security breach

## Results

One of the results of these attacks was the development of response teams. Also referred to as CSIRTs (computer security incident response teams)

# CISSP Security Domains

Certified Information Systems Security Professional Security Domains

## Security and Risk Management

Defines security goals and objectives, risk mitigation, compliance, business continuity, and the law.

## Asset Security

Secure digital and physical assets. 
Handles the storage, maintenance, retention, and destruction of data. 

## Security Architecture and Engineering

Optimizes data security by ensuring proper tools, systems, and processes are in place.

Example: configuring firewalls

## Communications and Network Security

Manage/secure physical networks & wireless communications

## Identity and Access Management

Keeps data secure
Establish policies for users in order to control and manage physical and logical (networks, applications) assets

## Security Assessment and Testing

Conducts security control testing, collecting & analyzing data, conducting security audits to monitor for risks, threats, and vulnerabilities.

*This may be where I would want to focus - "white hat" hacking/testing*

## Security Operations

Conduct investigations & implement preventative measures. 

Respond to alerts to stop potential threats. 

## Software Development Security

Uses secure coding practices based on guidelines to build secure applications.

# Common Attacks

## Phishing

Uses digital communications (ex: emails) to trick people into revealing sensitive information.

- Spear phishing: Malicious email attack that appears to originate from a trusted source
- Business Email Compromise (BEC): Threat actor sends email & makes a seemingly legitimate request for information by pretending to be business team member, usually higher-up exec, etc. This is a type of spear phishing
- Whaling: Spear phishing that targets executives or other higher-ups
- Vishing: Exploits voice communication
- Smishing: Exploits text message communication

## Malware

Software designed to harm devices or networks. Usually used to obtain money.

- Viruses: A malware program that is downloaded onto a computer by an unsuspecting user. Attaches it's own code to the computer system once opened. 
- Worms: Malware that can replicate itself & spread to more computer systems on it's own. Doesn't need to be downloaded - can spread itself to further devices on the same network. 
- Ransomware: Malware that requires $$$ to restore access to computer, data, etc. 
- Spyware: Malware that collects data for threat actors to sell w/o user consent.

## Social Engineering

Manipulation technique that exploits human error, which is usually trusting someone without question. A social engineer is someone who creates an environment of false trust and lies in order to exploit someone.

- Social media physhing: gain information through social media, then attack using that information
- Watering hole attack: Attack of a website used by a specific group of users
- USB baiting: Strategically leaves USB to be found & used in a computer to infect a network
- Physical social engineering: Impersonating someone to gain access to a physical location

Methods of social engineering: 
- Authority
- Intimidation
- Consensus or Social Proof
- Scarcity
- Familiarity or established relationship
- Trust often built over time
- Urgency

## Handling Attacks

### Keep Your Cool

Stay calm, keep others calm. 
#1 Priority is to shut down whatever is impacted to stop the data breach

# Understanding Attacks

## Specific Types of Attacks

### Password Attack

An attempt to access password-secured devices, systems, networks, or data. 

Some examples are brute force attacks and rainbow table attacks.

Domain: communication & network security

### Social Engineering Attack

Exploits human error - examples include phishing, smishing, vishing, spear phishing, whaling, social media phishing, business email compromise, watering hole attacks, USB baiting, and physical social engineering. 

Domain: security & risk managment 

### Physical Attack

An attack that also affects physical environments. 

Examples: Malicious USB cable, malicious flash drive, card cloning & skimming

Domain: Asset security

### Adversarial Artifical Intelligence

An attack that manipulates AI/machine learning to conduct attacks more efficiently. 

Domains: communication & network security, identity and access management

### Supply chain attack

Targets systems, applications, hardware, software to locate vulnerabilities for malware. 
Can occur at any point in the supply chain. 
Can be very costly

Domains: (potential for...) security & risk management, security architecture & engineering, security operations

### Cryptographic attack

Affects secure forms of communication between sender/intended recipient. For example, gaining password access.

Examples: Birthday, collision, downgrate

Domain: communication & network security

# Understanding Attackers

## APTs

Advanced persistent threats have significant expertise accessing an organizations network w/o authorization. 