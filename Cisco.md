# Cisco

## Basic

### Network types
- Network types:
  - LANs:
    - interconnect end device device in a limited area such as a home, school, office building, or campus
    - usually administered by a single organization or individual
    - provide high-speed bandwith to internal end devices and intermidiary devices
  - WANs:
    - interconnect LANs over wide geographical areas such as between cities, states, provinces, countries, or continents
    - usually administered by several providers
    - typically provide slower speed between LANs
  - intranet => private connection of LANs and WANs that belongs to an organization. Designed to be accessible only by organization's member, employees, or other with authorization
  - extranet => provice secure and safe access to inviduals who work for a different organization but require access to the organization's data

1. Size of the area covered
2. Number of users connected
3. Number of types of services abailable
4. Area of responsibility

### Network topology
- Topology:
  - logical => refers to the way a network transfers frames from one node to the next. This topology identifies virtual connections using device interfaces and Layer 3 IP addressing schemes.
  - physical => identifies the physical connections and how and devices and intermediary devices are interconnected. The topology may also include specific device location such as room number and location on the equipment rack.

- Netowrk terms:
  - hosts
  - media
  - intermidiary
  - ISPs

- Connection options:
  - broadband cabel
  - broadband digital subscriber line (DSL)
  - wireless WANs
  - mobile services

- WAN topoloqies:
  - Point-to-Point
  - Hub and Spoke
  - Mesh

- Legacy LAN Topologies:
  - Bus - all end systems are chained to each other and terminated in some from on each end. Infrastructure devices such as switches are not required to interconnect the end devices. Legacy Ethernet networks were often bus topoligies using coax cables because it was inexpensive and easy to set up.
  - Ring - End systemd are connected to their respective neighbor forming a ring. The ring does not need to be terminated, unlike in the bus topology. Legacy Fiber Destributed Data Interface (FDDI) and Token Ring networks used ring topologies.

### Network connection
- Home and Small Office Internet connection:
  - DSL => provide high bandwith, high availability, and an always-on connection to the internet. DSL run over a telephone line. In general, small office and home office users connect using Asymmetrical DSL, which means that the download speed is faster than the upload speed.
  - Cable => typically offered by a cable television serivice providers, the internet data signal transmits on the same cable that delivers cable television. It provides a high bandwith, high availability, and an always-on connection to the internet
  - Cellular => access uses a cell phone network to connect. Wherever you can get a cellular signal, you can get cellular internet access. Performance is limited by the capabilites of the phone and the cell tower to which is connected
  - Satellite => the availability of satellite internet access is a benefit in those areas that would otherwise hane no internet connectivity at all. Satellite dishes require a clear line of sight to the satellite
  - Dial-up Telephone => uses any phone line and modem

- Business Internet connection:
  - Dedicated Leased Lines => reserved circuits within the service provider's network that connect geographically separated offices for private voice and/or data networking
  - Metro Ethernet => Ethernet WAN.
  - Business DSL => popular choice is Symmetric Digital Subscriber Line (SDSL) which is similar to the consumer version of DSL but provides upload and downloads at the same high speed
  - Satellite => when wired solution is not available

### Network characteristics
- Basic characteristics of network:
  - Fault tolerance => one that limits the number of affected devices duting a failure.
  - Scalability => quickly network expands to support new users and applications.
  - Quality of Service (QoS) => primary machanism for managing congestion and ensuting reliable delivery of content to all users.
  - Security => confidentiality, integrity, availability.

- Network trends:
  - Bring Your Own Device (BYOD)
  - Online collabaration
  - Video communication
  - Cloud computing

### Network treats
- Common external treats to network:
  - Viruses, worms and Trojan horses
  - Spyware and adware
  - Zero-day attack
  - Threat actor attack
  - Denial of service attack

## Network protocol

### Basic about protocol
- Basic requirements:
  - Message encoding => process of converting information into another acceptable form, for transmission
  - Message formatiing and encapsulation => when a message sent from source to destination, it must use a specific format or structure. Message format depend on the type of message and the channel that is used to deliver the message
  - Message size => broke message into smaller parts
  - Message timing => [ flow control, response timeout, access method ]
  - Message delivery options => a message can be delivered in different ways [ multicast, broadcast, unycast ]

- TCP/IP has two important aspects for vendors and manufectures:
  - Open standard protocol suite => freely available to the public and can be used by any vendor on their hardware or in the software
  - Standard-based protocol suite => has been endorsed by the networking industry and approved by a standards organization. This ensures that product from different manufectures can interoperate successfully

### Types of protocol
Protocol type | Description
--- | ---
 Network communication protocol | Protocol enable two or more devices to communicate over one or more networks. The Ethernet family of technologies involves a variety of protocols such as IP, Transmission Control Protocol (TCP), HyperText Transfer Protocol (HTTP), and many more.
Network security protocol | Protocol secure data to provide authentication, data integrity, and data encryption. Examples of secure protocols include Secure Shell (SSH), Secure Socket Layer (SSL), and Transport Layer Security (TLS)
Routing Protocols | Protocols enable routers to exchange route information, and then to select the best path to the destination network. Example of routing protocol include Open Shortest Path First (OSPF) and Border Gateway Protocol (BGP)
Service Discovery Protocol | Protocol are used for the authomatic detection of devices or services. Examples of service descovery protocols include Dynamic Host Configuration Protocol (DHCP) which discovers services for IP address allocation, and Domain Name System (DNS) which is used to perform name-to-IP address translation

### List the functions of these protocols
Function | Description
--- | ---
Addressing | The identifies the sender and the intended receiver of the message using a defined addressing scheme. Example of protocols that provide addressing include Ethernet, IPv4, IPv6
Reliability | This function provides guaranteed delivery mechanisms in case messages are lost or corrupted in transit. TCP provides guaranteed delivery
Flow control | This function ensures that data flows at an efficient rate between two communicating devices. TCP provides flow control services
Sequencing | This function is uniqely labels each transmitted segment of data. The receiving device uses the sequencing information to reassemble the information correctly. This is useful if the data segment are lost, delayed or received out-of-order. TCP provides sequencing services
Error detection | This function is used to determine if data became corrupted during transmission. Various protocol that provide error detection include Ethernet, IPv4, IPv6, TCP
Application interface | This function contains information used for process-to-process communication between network applications. For example, when accessing a web page, HTTP or HTTPS protocols are used to communicate between the client and server web processes

### Internet standards [involved organizations]
- Internet Society (ISOC) => responsible for promoting the open development and evolution of internet use throughout the world
- Internet Architercture Board (IAB) => responsible for the overall management and develpment of internet standard
- Internet Engineering Task Force (IETF) => develops, updates, and maintains internet and TCP/IP technologies. This includes the process and documents for developing new protocols and updating existing protocols, which are known are Request for Comments (RFC) documents.
- Internet Research Task Force (IRTF) => focused on long-term research related to internet and TCP/IP protocol such as Anti-Spam Research Group (ASRG), Crypto Forum Research Group (CFRG), and Peer-to-Peer Reasearch Group (P2PRG)

### Organizations involved with the development and support of TCP/IP and include IANA and ICANN
- Internet Corporation for Assigned Names and Numbers (ICANN) => based in US, coordinates IP address allocation, the managment of domain names, and assignment of other information used in TCP/IP protocols
- Internet Assigned Numbers Authority (IANA) => responsible for overseeing and managing IP address allocation, domain name management, and protocol identifiers for ICANN

### Electronic and communication standards to deliver the IP packets as electronic signal over a wired or wireless medium
- Institute of Electrical and Electronics Engineers (IEEE) => organization of electrical engineering and electronics dedicated to advancing technological innovation and creating standards in a wide area of industries including power and energy, healthcare, telecommunications, and networking. Important IEEE networking standard include 802.3 Ethernet and 802.11 WLAN standard. Search the internet for other IEEE network standards
- Electronic Industries Alliance (EIA) => is best known for its standards relating to electrical wiring, connector, and the 19-inch racks used to mount networking equipment
- Telecommunications Industry Association (TIA) => responsible for developing communication standard in variety of areas including radio equipment, cellular towers, Voice over IP (VoIP) devices, satellite communication, and more
- International Telecommunications Union-Telecommunications Standardization Sector (ITU-T) => defines standards for video compression, Internet Protocol Television (IPTV), and broadband communications, such as a digital subscriber line (DSL)

### Benefits of using a layered model
- Assists in protocol design because protocols that operate at a specific layer have defined information that they act upon and a defined interface to the layers above and below
- Fostering completion because products from different vendors can work together
- Preventing technology or capability changes in one layer from affecting other layers above and below
- Providing a common language to describe networking functions and capabilites

### Open System Interconnection (OSI) Reference model
OSI Model Layer | Description
 --- | ---
7 - Application | The application layer contains protocol used for process-to-process communication
6 - Presentation | The presentation layer provides for common representation of the data transferred between application layer services
5 - Session | The session layer provides services to presentation to organize its dialogue and to manage data exchange
4 - Transport | The transport layer defines services to segment, transfer, and reassemble the data for invidula communication between the end devices
3 - Network | The network layer provides services to exchange the individual pieces of data over the network between identified devices
2 - Data Link | The data link layer protocols describe methods for exchanging data frames between devices over a common media
1 - Physical | The physical layer protocols describe the mechanical, electrical, functional, and procedural means to activate, maintain, and de-active physical connection for a bit transmission to and from a network device

### TCP/IP Reference model
TCP/IP Model Layer | Description
 --- | ---
4 - Application | Represents data to a user, plus encoding and dialog control
3 - Transport | Support communication between various devices across diverse networks
2 - Internet | Determine the best path through the network
1 - Network Access | Controls the hardware devices and media that make up the network

### Protocol Data Units (PDU)
- Data => general application layer
- Segment | datagram => transport layer
- Packet => network layer
- Frame => data link layer
- Bits => physical layer

## Physical layer

The physical layer standards address three functional areas:
- Physical components
- Encoding
- Signaling

### Measures
- Bandwidth => the amount data, that can flow from one place to another in a given amount of time :
  - Latency => amount of time, including delays, for data travel from one given point to another
  - Throughout => measure of transfer of bits across the media over a given period of time
  - Goodput => transfer of usable data

### Types
- Fiber-Optic
- Copper
- Wireless


## Configuration Cisco's device

### Configure hostname
Router(config)# hostname *hostname*

### Secure privileged EXEC mode
Router(config)# enable secret password

### Secure user EXEC mode
Router(config)# line console 0
Router(config-line)# password *password*
Router(config-line)# login

### Secure remote Telnet / SSH access
Router(config-line)# line vty 0 15
Router(config-line)# password *password*
Router(config-line)# login
Router(config-line)# transport input {ssh | telnet}

### Secure all passwords
Router(config)# service password-encryption

### Provide legal notification
Router(config)# banner motd *delimiter* *message* *delimiter*

### Save settings
Router# copy running-config startup-config

### Erase startup
Router# erase startup-config


### Interface
Router(config)# interface *type-and-number*
Router(config-if)# description *description-text*
Router(config-if)# ip address *ipv4-address* *subnet-mask*
Router(config-if)# ipv6 address *ipv6-address/prefix-length*
Router(config-if)# no shutdown

### Verify Interface configuration
Router# show ip interface brief
Router# show ip route
Router# show interfaces
Router# show ip interfaces

## Tips
(config)# end => go to exec [Ctrl-Z]

Keystroke | Description
 --- | ---
Tab | Completes a partial command name entry
Backspace | Erases the character to the left of the cursor
Ctrl+D | Erases the character at the cursor
Ctrl+K | Erases all characters from the cursor to the end of the command line
Esc D | Erases all characters from the cursor to the end of the word
Ctrl+U or Ctrl+X | Erases all characters from the cursor back to the beginning of the command
Ctrl+W | Erases the word to the left of the cursor
Ctrl+A | Moves the cursor to the beginning of the line
Left Arrow or Ctrl+B | Moves the cursor one character to the left
Esc B | Moves the cursor back one word to the left
Esc F | Moves the cursor forward one word to the right
Right Arrow or Ctrl+F | Moves the cursor one character to the right
Ctrl+E | Moves the cursor to the end of command line
Up Arrow or Ctrl+P | Recalls the previous command in the history buffer, beginning with the most command
Down Arrow or Ctrl+N | Goes to the next line in the history buffer
Ctrl+R or Ctrl+I or Ctrl+L | Redisplays the system prompt and command line after a console message is
Ctrl-C | When in any configuration mode, end the configuration mode and returns to privileged EXEC mode. When in setup mode, aborts back to the command prompt
Ctrl-Z | When in any configuration mode, ends the configuration mode and returns to privileged EXEC mode
Ctrl-Shift-6 | All-purpose break sequence used to abort DNS lookups, traceroutes, pings, etc


### System files
- Startup-config => this is the saved configuration file that is stored in NVRAM. It contains all the commands that will be used by the device upon startup or reboot. Flash does not lose its contents when the device is powered off.
- Running-config => this is stored in Random Access Memory (RAM). It reflects the current configuration. Modifying a running configuration affects the operation of a Cisco device immediately. RAM i volatile memory. It loses all of its content when the device is powered off or restarted.

## Data Link layer
### Basics
The data link layer does the following:
- Enables upper layers to access the media. The upper layer protocol is completely unaware of the type of media that is used to forward the data.
- Accepts data, usually Layer 3 packets (i.e., ipv4 or IPv6), and encapsulates them into Layer 2 frames.
- Controls how data is places and received on the media.
- Exchanges frames between endpoints over the network media.
- Receives encapsulated data, usually Layer 3 packets, and directs them to the proper upper-layer protocol.
- Performs error detection and rejects any corrupt frame.

L2 Header => Destination NIC, Source NIC

IEEE 802 LAN/MAN standards are cpecific to Ethernet LANs, wireless LANs (WLAN), wireless personal area networks (WPAN) and other types of local and metropolitan area networks. The IEEE 802 LAN/MAN data link layer consists of the following two sublayers:
- Logical Link Control (LLC) - This IEEE 802.2 sublayer communicates between the networking software at the upper layers and the device hardware at the lower layers. It places information in the frame that identifies which network layer protocol is being used for the frame. This information allows multiple Layer 3 protocols, such as IPv4 and IPv6, to use the same network interface and media.
 - Media Access Control (MAC) - Implements this sublayer (IEEE 802.3, 802.11, or 802.15) in hardware. It is responsible for data encapsulation and media access control. It provides data link layer addressing and it is integrated with various physical layer technologies.

The LLC sublayer takes the network protocol data, which is typically an IPv4 or IPv6 packet, and adds Layer 2 control information to help deliver the packet to destination node.

The MAC sublayer controls the NIC and other hardware that is responsible for sending and receiving data on the wired or wireless LAN/MAN medium.

The MAC sublayer provides data encapsulation:
- Frame delimiting - the framing process provides important delimiters to identify fields within a frame. These delimiting bits provide synchronization between the transmitting and receiving nodes.
- Addressing - Provides source and destination addressing for transporting the Layer 2 frame between devices on the same shared medium.
- Error detection Includes a trailer used to detect transmission errors.1a1
The MAC sublayer also provides media access control, allowing multiple devices to communicate over a shared (half-duplex) medium. Full-duplex communications do not require access control.

At each hop along the path, a router performs the following Layer 2 functions:

1. Accepts a frame from a medium
2. De-encapsulates the frame
3. Re-encapsulates the packet into a new frame
4. Forwards the new frame appropriate to the medium of that segment of the physical network

### Standards
Data link layer protocols are generally not defined by Request for Comments (RFCs), unlike the protocols of the upper layers of the TCP/IP suite. The Internet Engineering Task Force (IETF) maintains the functional protocols and services for the TCP/IP protocol suite in the upper layers, but they do not define the functions and operation of the TCP/IP network access layer.

Engineering organizations that define open standards and protocols that apply to the network access layer (i.e., the OSI physical and data link layers) include the following:

- Insitute of Electical and Electronics Engineers (IEEE)
- International Telecommunication Union (ITU)
- International Organization for Standardization (ISO)
- Americal National Standards Institute (ANSI)

### Access control method

Two basic access control methids for shared media:
- Contention-based access
- Controlled access

#### Contention-based access
In contention-based multiaccess networks, all nodes are operating in half-duplex, competing for the use of the medium. However, only one device can send at a time. Therefore, there is a process if more than one device transmits at the same time. Examples of contention-based access methids include the following:
- Carrieer sense multiple access with collision detection (CSMA/CD) used on legacy bus-topology Ethernet LANs
- Carrier sense multiple access with collision avoidance (CSMA/CA) used on Wireless LANs

##### Contention-Based Access - CSMA/CA
Examples:
- Wireless LAN

In wireless environments it may not be possible for a device to detect a collision. CMSA/CA does not detect collisions but attempts to avoid tham by waiting before transmitting. Each device that tranmits includes the time duration that it needs for the transmission. All over wireless devices receive this information and know how long the medium will be unavailable.


##### Contention-Based Access - CSMA/CD
Examples:
- Legacy bus-topology Ethernet LAN
- Legacy Ethernet LAN using a hub

If two devices transmit at the same time, a collision will occur. For legacy Ethernet LANs both devices will detect the collision on the network. This is the collision detection (CD) portion of CSMA/CD. The NIC compares data transmitted with data received, or by recofnizing that the signal amplitude is higher than normal on the media. The data sent by both devices will be corrupted and will need to be resent.

### Controled based
In a controlled-based multiaccess network, each node has its own time to use the medium. These deterministic types of legacy networks are inefficient becase a device must wait its turn to access the medium. Examples of multiaccess network that use access include the following:
- Legacy Token Ring
- Legacy ARCNET

### Frame
Three basic parts:
- Header
- Data
- Trailer

Extended:
1. Frame start and stop indicator flags - Used to identify the beginning and end limits of the frame.
2. Addressing - Indicates the source and destination nodes on the media. [Destination | Source]
3. Type - Identifies the Layer 3 protocol in the data field.
4. Control - Identifies special flow control services such as quality of service (QoS). QoS gives forwarding priority to certain types of messages.
5. Data - Contains the frame payload (i.e. packet header, segment header, and the data).
6. Error Detection - Included after the data to form the trailer.

Data link layer protocols add a trailer to the end of each frame. In a process called error detection, the trailer determines if the frame arrived without error. It places a logical or mathematical summary of the bits that comprise the frame in the trailer. The data link layer add error detection becausethe signals on the media could be subject to interference, distortion, or loss that would substantially change the bit values that those signals represent.

A transmitting node creates a logical summary of the contents of the frame, known as the cyclic redundancy check (CRC) value. This value is placed in the frame check sequence (FCS) field to represent the contents of the frame. In the Ethernet trailer, the FCS provides a method for the receiving node to determine whether the frame experienced transmission errors.

WAN protocols:
- Point-to-Point Protocol (PPP)
- High-Level Data Link Control (HDLC)
- Frame Relay
- Asynchronous Transfer Mode (ATM)
- X.25

Data link layer protocol include:
- Ethernet
- 802.11 Wireless
- Point-to-Point Protocol (PPP)
- High-Level Data Link Control (HDLC)
- Frame Relay

## Ethernet
### Basics
Ethernet operates in the data link layer and the physical layer. It is a family of networking technologies defined in the IEEE 802.2 and 802.3 standards. Ethernet supports data bandwidth of the following:
- 10 Mbps
- 100 Mbps => 802.3u
- 1,000 Mbps (1 Gbps) => 802.3z [over Fiber] => 802.3ab [over Copper]
- 10,000 Mbps (10 Gbps) => 802.3ae [over Fiber]
- 40,000 Mbps (40 Gbps)
- 100,000 Mbps (100 Gbps)

### Frame fields
1. Preamble and Start Frame Delimiter Fields
2. Destination MAC Adress Field
3. Source MAC Address Field
4. Type / Length
5. Data Field
6. Frame Check Sequence Field

### MAC Address
Length => 48 bits => 6 bytes
First 3 bytes => Organization Unique Identifier (OUI)
- Cisco => 00-60-2F
Last 3 bytes => Vendor Assigned


### Types of communication
1. Unicast => sent form a single transmitting device to a single destination device. The process that source host uses to determine the destination MAC address associated with an IPv4 address is known as Address Resolution Protocol (ARP). The process that a source host uses to dtermine the destination MAC address associated with an IPv6 address is known as Neighbor Discovery (ND).
2. Broadcast => frame is received and processed by every device on the Ethernet LAN:
  1. Is has a destination MAC address of FF-FF-FF-FF-FF-FF in hexadecimal.
  2. It is flooded out all Ethernet switch ports except the incoming port.
  3. It is not forwarded by a router.
3. Multicast -> frame is received and processed by a group of deviced on the Ethernet LAN that belong to the same multicast group:
  1. There is a destination MAC address of 01-00-5E when the encapsulated data is an IPv4 multicast packet and a destination MAC address of 33-33 when the encapsulated data is an IPv6 multicast packet.
  2. There are other reserved multicast destination MAC addresses for when the encapsulated data is not IP, such as Spanning Tree Protocol (STP) and Link Layer Protocol (LLDP).
  3. It is flooded out all Ethernet switch ports except the incoming port, unless the switch is configured for multicast snooping.
  4. It is not forwarded by a router, unless the router is configured to route multicast packets.

### Frame forwarding
- Store-and-forward switching - This frame forwarding method receives the entire frame and computes the CRC. CRC uses a mathematical formulf, based on the number of bits (1s) in the frame, to determine whether the received frame has an error. If the CRC is valid, the switch looks up the destination address, which determines the outgoing interface. Then the frame is forwarded out of the correct port.
- Cut-through switching - This frame forwaring method forwards the frame before it is entirely received. At a minimum, the destination address of the frame must be read before the frame can be forwarded. Two variants:
  - Fast-forward switching - Fast-forward switching offers the lowest level of latency. Fast-forward switching immediatelly forwards a packet after reading the destination address. Because fast-forward switching starts forwarding before the entire packet has been received, there may be times when packets are relayed with errors. This occurs infrequently, and the destination NIC discards the faulty packet upon receipt. In fast-forward mode, latency is measured from the first bit received to the first bit transmitted.
  - Fragment-free switching - The switch stores the first 64 bytes of the frame before forwarding. Fragment-free switching can be viewed as a compromise between store-and-forward switching and fast-forward switching. The reason fragment-free switching stores only the first 64 bytes of the frame is that most network errors and collisions occur during the first 64 bytes. Fragment-free switching tries to enhance fast-forward switching by performing a small error in frame.

### Memory Buffering Methods
- Port-based memory:
  - Frames are stored in queues that are linked to specific incoming and outgoing ports.
  - A frame is transmitted to the outgoing port only when all the frames ahead in the queue have been successfully transmitted.
  - It is possible for a single frame to delay the transmission of all the frames in memory because of a busy destination port.
  - This delay occers even if the other frames could be transmitted to open destination ports.
- Shared memory:
  - Deposits all frames into a common memory buffer shared by all switch ports and the amount of buffer memory required by a port is dynamically allocated.
  - The frames in the buffer are dynamically linked to the destination port enabling a packet to be received on one port and then transmitted on another port, without moving it to different queue.

### Basic settings in a switch
- Bandwidth ("speed") :
- Duplex :
  - Full-duplex => Both ends of the connection can send and receive simultaneously.
  - Half-duplex => Only one end of the connection can send at a time.
Autonegotiation is an optional function. It enables two deviced to automatically negotiate the best speed and duplex capabilities.

Most switch devices now support the automatic medium-dependent interface crossover (auto-MDIX) feature. When enabled, the switch automatically detects the type of cable attached to the port and configures the interfaces accordingly. Therefore, you can use either a crossover or a straight-through cable for connections to a copper 10/100/1000 port on the switch, regardless of the type of device on the other end of the connection.

The auto-MDIX feature is enabled by default on switches running Cisco IOS Release 12.2(18)SE or later. However, the feature could be disabled. For this reason, you should always use the correct cable type and not rely on the auto-MDIX feature. Auto-MDIX can be re-enabled using the mdix auto interface configuration command.
