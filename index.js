import express from 'express';
import { GoogleAuth } from 'google-auth-library';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import notificationRoutes from './routes/notificationRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;


// const getAccessToken = async () => {
//   const auth = new GoogleAuth({
//     keyFile: path.join(__dirname, 'genie-retailer-firebase-adminsdk-1o96w-d29171fe87.json'), // Path to your service account key file
//     scopes: ['https://www.googleapis.com/auth/firebase.messaging']
//   });

//   const client = await auth.getClient();
//   const accessToken = await client.getAccessToken();
//   console.log("access",accessToken);
//   return accessToken.token;
// };


app.get('/retailerAccessToken', async (req, res) => {
  console.log("jii")
  const auth = new GoogleAuth({
      keyFile: path.join(__dirname, 'genie-retailer-firebase.json'),
      scopes: ['https://www.googleapis.com/auth/firebase.messaging']
  });

  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();
  console.log("access",accessToken);
  return res.json({ accessToken: accessToken.token });
});

app.get('/customerAccessToken', async(req, res)=> {
  console.log("jii")
  const auth = new GoogleAuth({
      keyFile: path.join(__dirname, 'genie-customer-firebase.json'),
      scopes: ['https://www.googleapis.com/auth/firebase.messaging']
  });
  const client = await auth.getClient();
  const accessToken = await client.getAccessToken();
  console.log("access",accessToken);
  return res.json({ accessToken: accessToken.token });
})



// const sendCustomNotificationToMultipleUsers = async (req,res) => {
//     try {
//       const tokens = [
//         "dDCcOdbBSHCBczVl8sM6AS:APA91bEWQ2KT0Q1JleNtv4-04pxPDj3Clm8pUf7VzoSjo4gNr-ZpczWTV727J8uHpWTFIrtJlTZSaW3VAbzAcFivT8PG2yBLgdDKv6nSXw46rCdRYPUpbbJu20szxai2saQp7QijsBPL",
//         "fgcqIA64RdOU1yIQeqxrff:APA91bGDld9pwdI2dAOWxgPryG8U8z6E4on2yDQjmH-ary5An5NPTLW1c4kVoleWaW2sYsNQt2OJOwK0AjOufpTsMo8CMsDXCd4XhRzsdvgrdhOV1KAG7Zjvss3dVbJqqOfFSob3YDXF"
//       ];
  
//       const accessToken = await getAccessToken();
  
//       const url = 'https://fcm.googleapis.com/v1/projects/genie-retailer/messages:send'; // Replace YOUR_PROJECT_ID with your actual project ID
  
//       const headers = {
//         'Content-Type': 'application/json; charset=UTF-8',
//         'Authorization': `Bearer ${accessToken}`
//       };
  
//       const notification = {
//         notification: {
//           title: "Hello! How Are You?",
//           body: "Hi there! Check out this beautiful image.",
//           image: "https://images.pexels.com/photos/22033614/pexels-photo-22033614/free-photo-of-stupa-benalmadena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//         },
//         android: {
//           priority: "high",
//           notification: {
//             image: "https://images.pexels.com/photos/22033614/pexels-photo-22033614/free-photo-of-stupa-benalmadena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           }
//         },
//         data: {
//           redirect_to: "home"
//         }
//       };
  
//       for (const token of tokens) {
//         const message = {
//           message: {
//             token: token,
//             ...notification
//           }
//         };
  
//         const response = await fetch(url, {
//           method: 'POST',
//           headers: headers,
//           body: JSON.stringify(message),
//         });
  
//         const textResponse = await response.text();
//         console.log('Raw response:', textResponse);
  
//         if (!response.ok) {
//           console.error('Failed to send notification error:', textResponse);
//           throw new Error('Failed to send notification');
//         } else {
//           const successResponse = JSON.parse(textResponse);
//           console.log('Notification sent successfully:', successResponse, message);
//         }
//       }
//     } catch (e) {
//       console.error('Failed to send notification:', e);
//     }
//   };
  
//  const sendCustomNotificationToSingleUser = async (req,res) => {
//     try {
//       const message = {
//         message: {
//           token: "dDCcOdbBSHCBczVl8sM6AS:APA91bEWQ2KT0Q1JleNtv4-04pxPDj3Clm8pUf7VzoSjo4gNr-ZpczWTV727J8uHpWTFIrtJlTZSaW3VAbzAcFivT8PG2yBLgdDKv6nSXw46rCdRYPUpbbJu20szxai2saQp7QijsBPL",
//           notification: {
//             title: "Hello! How Are You?",
//             body: "Hi there! Check out this beautiful image.",
//             image: "https://images.pexels.com/photos/733860/pexels-photo-733860.jpeg"
//           },
//           android: {
//             priority: "high",
//           },
//           data: {
//             redirect_to: "requestPage"
//           }
//         }
//       };
      
  
//       const accessToken = await getAccessToken();
  
//       const notificationResponse = await fetch(`https://fcm.googleapis.com/v1/projects/genie-retailer/messages:send`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json; charset=UTF-8',
//           'Authorization': `Bearer ${accessToken}`
//         },
//         body: JSON.stringify(message),
//       });
  
//       const textResponse = await notificationResponse.text();
//       console.log('Raw response:', textResponse);
  
//       if (!notificationResponse.ok) {
//         console.error('Failed to send notification error:', textResponse);
//         throw new Error('Failed to send notification');
//       } else {
//         const successResponse = JSON.parse(textResponse);
//         console.log('Notification sent successfully:', successResponse, message);
//       }
//     } catch (e) {
//       console.error('Failed to send notification:', e);
//     }
//   };
  
  // const sendCustomNotificationChat=async (mess) => {
   
  //   console.log('mess',mess);
  //   try {
  //     const message = {
  //       message: {
  //         token: "eIlIrEuxR9ij6cG6Byx_z-:APA91bGaP0aXDm75xN2foJoZJIBkBWd6t33GfBJOu8q-oc1DbdQeHndhOSdm24Sm_efT93lFbaC2Ixt53FWYWNLsA6jiXNsemg3D9epyebk2ChZnvqlwPRjHinAtAFtdfhGa8OWnFm42",
  //         notification: {
  //           title: `${mess.name}`,
  //           body: `${mess.body}`,
  //           image: "https://images.pexels.com/photos/733860/pexels-photo-733860.jpeg"
  //         },
  //         android: {
  //           priority: "high",
  //           notification: {
  //             image: "https://images.pexels.com/photos/22033614/pexels-photo-22033614/free-photo-of-stupa-benalmadena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //             sound: "default",
  //             icon: "fcm_push_icon",
  //             color:"#fcb800",
  //             tag:"user_id",
        
  
  //           }
  //         },
  //         data: {
  //           redirect_to: `${mess.redirect_to}`,
  //           requestInfo:JSON.stringify(`${mess.requestInfo}`)
  
  //         }
  //       }
  //     };
      
  
  //     const accessToken = await getAccessToken();
  
  //     const notificationResponse = await fetch(`https://fcm.googleapis.com/v1/projects/genie-user/messages:send`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json; charset=UTF-8',
  //         'Authorization': `Bearer ${accessToken}`
  //       },
  //       body: JSON.stringify(message),
  //     });
  
  //     const textResponse = await notificationResponse.text();
  //     console.log('Raw response:', textResponse);
  
  //     if (!notificationResponse.ok) {
  //       console.error('Failed to send notification error:', textResponse);
  //       throw new Error('Failed to send notification');
  //     } else {
  //       const successResponse = JSON.parse(textResponse);
  //       console.log('Notification sent successfully:', successResponse, message);
  //     }
  //   } catch (e) {
  //     console.error('Failed to send notification:', e);
  //   }
  // };
  
//  const NotificationBidAccepted=async (req,res) => {
//     try {
//       const message = {
//         message: {
//           token: "dDCcOdbBSHCBczVl8sM6AS:APA91bEWQ2KT0Q1JleNtv4-04pxPDj3Clm8pUf7VzoSjo4gNr-ZpczWTV727J8uHpWTFIrtJlTZSaW3VAbzAcFivT8PG2yBLgdDKv6nSXw46rCdRYPUpbbJu20szxai2saQp7QijsBPL",
//           notification: {
//             title:`${mess.name}`,
//             body: "Hi,I have accepted your bid!",
//             // image: "https://images.pexels.com/photos/733860/pexels-photo-733860.jpeg"
//           },
//           android: {
//             priority: "high",
//             notification: {
//               image:`${mess.image}`,
//               sound: "default",
//               icon: "fcm_push_icon",
//               color:"#fcb800",
//               tag:"bid_accept"
  
//             }
//           },
//           data: {
//             redirect_to: `${mess.redirect_to}`,
//             //  requestInfo:JSON.stringify({"__v": 1, "_id": "66532414ff164bf94697251d", "bidCompleted": true, "createdAt": "2024-05-26T11:59:16.279Z", "requestId": {"__v": 0, "_id": "66532414ff164bf94697251b", "createdAt": "2024-05-26T11:59:16.052Z", "customer": "664d6fb333bcb1bbd6cf9f66", "expectedPrice": 2500, "requestAcceptedChat": "66532414ff164bf94697251d", "requestActive": "completed", "requestCategory": "spare parts", "requestDescription": "bike tyre", "requestImages": ["https://res.cloudinary.com/kumarvivek/image/upload/v1716724746/zznnqcnga7ktx9v4vlto.jpg"], "updatedAt": "2024-05-26T12:00:58.405Z"}, "requestType": "completed", "updatedAt": "2024-05-26T12:00:58.844Z", "users": [{"_id": "66532414ff164bf94697251e", "refId": "664d74f100215ea2aea8a35d", "type": "Retailer"}, {"_id": "66532437ff164bf94697252e", "refId": "66532414ff164bf94697251b", "type": "UserRequest"}]})
  
//           }
//         }
//       };
      
  
//       const accessToken = await getAccessToken();
  
//       const notificationResponse = await fetch(`https://fcm.googleapis.com/v1/projects/genie-retailer/messages:send`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json; charset=UTF-8',
//           'Authorization': `Bearer ${accessToken}`
//         },
//         body: JSON.stringify(message),
//       });
  
//       const textResponse = await notificationResponse.text();
//       console.log('Raw response:', textResponse);
  
//       if (!notificationResponse.ok) {
//         console.error('Failed to send notification error:', textResponse);
//         throw new Error('Failed to send notification');
//       } else {
//         const successResponse = JSON.parse(textResponse);
//         console.log('Notification sent successfully:', successResponse, message);
//       }
//     } catch (e) {
//       console.error('Failed to send notification:', e);
//     }
//   };
  
//  const NotificationBidRejected= async (req,res) => {
//     try {
//       const message = {
//         message: {
//           token: "dDCcOdbBSHCBczVl8sM6AS:APA91bEWQ2KT0Q1JleNtv4-04pxPDj3Clm8pUf7VzoSjo4gNr-ZpczWTV727J8uHpWTFIrtJlTZSaW3VAbzAcFivT8PG2yBLgdDKv6nSXw46rCdRYPUpbbJu20szxai2saQp7QijsBPL",
//           notification: {
//             title:`${mess.name}`,
//             body: "Hi,I have rejected your bid!",
//             image: "https://images.pexels.com/photos/733860/pexels-photo-733860.jpeg"
//           },
//           android: {
//             priority: "high",
//             notification: {
//               image: "https://images.pexels.com/photos/22033614/pexels-photo-22033614/free-photo-of-stupa-benalmadena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//               sound: "default",
//               icon: "fcm_push_icon",
//               color:"#fcb800",
//               tag:"bid_reject"
  
//             }
//           },
//           data: {
//             redirect_to: `${mess.redirect_to}`,
//             //  requestInfo:JSON.stringify({"__v": 1, "_id": "66532414ff164bf94697251d", "bidCompleted": true, "createdAt": "2024-05-26T11:59:16.279Z", "requestId": {"__v": 0, "_id": "66532414ff164bf94697251b", "createdAt": "2024-05-26T11:59:16.052Z", "customer": "664d6fb333bcb1bbd6cf9f66", "expectedPrice": 2500, "requestAcceptedChat": "66532414ff164bf94697251d", "requestActive": "completed", "requestCategory": "spare parts", "requestDescription": "bike tyre", "requestImages": ["https://res.cloudinary.com/kumarvivek/image/upload/v1716724746/zznnqcnga7ktx9v4vlto.jpg"], "updatedAt": "2024-05-26T12:00:58.405Z"}, "requestType": "completed", "updatedAt": "2024-05-26T12:00:58.844Z", "users": [{"_id": "66532414ff164bf94697251e", "refId": "664d74f100215ea2aea8a35d", "type": "Retailer"}, {"_id": "66532437ff164bf94697252e", "refId": "66532414ff164bf94697251b", "type": "UserRequest"}]})
  
//           }
//         }
//       };
      
  
//       const accessToken = await getAccessToken();
  
//       const notificationResponse = await fetch(`https://fcm.googleapis.com/v1/projects/genie-retailer/messages:send`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json; charset=UTF-8',
//           'Authorization': `Bearer ${accessToken}`
//         },
//         body: JSON.stringify(message),
//       });
  
//       const textResponse = await notificationResponse.text();
//       console.log('Raw response:', textResponse);
  
//       if (!notificationResponse.ok) {
//         console.error('Failed to send notification error:', textResponse);
//         throw new Error('Failed to send notification');
//       } else {
//         const successResponse = JSON.parse(textResponse);
//         console.log('Notification sent successfully:', successResponse, message);
//       }
//     } catch (e) {
//       console.error('Failed to send notification:', e);
//     }
//   };
//     const NewBidCreated= async (req,res) => {
//     try {
//       const message = {
//         message: {
//           token: "dDCcOdbBSHCBczVl8sM6AS:APA91bEWQ2KT0Q1JleNtv4-04pxPDj3Clm8pUf7VzoSjo4gNr-ZpczWTV727J8uHpWTFIrtJlTZSaW3VAbzAcFivT8PG2yBLgdDKv6nSXw46rCdRYPUpbbJu20szxai2saQp7QijsBPL",
//           notification: {
//             title:`${mess.name}`,
//             body: "New bid created of Rs.200",
//             image: "https://images.pexels.com/photos/733860/pexels-photo-733860.jpeg"
//           },
//           android: {
//             priority: "high",
//             notification: {
//               image: "https://images.pexels.com/photos/22033614/pexels-photo-22033614/free-photo-of-stupa-benalmadena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//               sound: "default",
//               icon: "fcm_push_icon",
//               color:"#fcb800",
//               tag:"new_bid"
  
//             }
//           },
//           data: {
//             redirect_to: `${mess.redirect_to}`,
//             //  requestInfo:JSON.stringify({"__v": 1, "_id": "66532414ff164bf94697251d", "bidCompleted": true, "createdAt": "2024-05-26T11:59:16.279Z", "requestId": {"__v": 0, "_id": "66532414ff164bf94697251b", "createdAt": "2024-05-26T11:59:16.052Z", "customer": "664d6fb333bcb1bbd6cf9f66", "expectedPrice": 2500, "requestAcceptedChat": "66532414ff164bf94697251d", "requestActive": "completed", "requestCategory": "spare parts", "requestDescription": "bike tyre", "requestImages": ["https://res.cloudinary.com/kumarvivek/image/upload/v1716724746/zznnqcnga7ktx9v4vlto.jpg"], "updatedAt": "2024-05-26T12:00:58.405Z"}, "requestType": "completed", "updatedAt": "2024-05-26T12:00:58.844Z", "users": [{"_id": "66532414ff164bf94697251e", "refId": "664d74f100215ea2aea8a35d", "type": "Retailer"}, {"_id": "66532437ff164bf94697252e", "refId": "66532414ff164bf94697251b", "type": "UserRequest"}]})
  
//           }
//         }
//       };
      
  
//       const accessToken = await getAccessToken();
  
//       const notificationResponse = await fetch(`https://fcm.googleapis.com/v1/projects/genie-retailer/messages:send`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json; charset=UTF-8',
//           'Authorization': `Bearer ${accessToken}`
//         },
//         body: JSON.stringify(message),
//       });
  
//       const textResponse = await notificationResponse.text();
//       console.log('Raw response:', textResponse);
  
//       if (!notificationResponse.ok) {
//         console.error('Failed to send notification error:', textResponse);
//         throw new Error('Failed to send notification');
//       } else {
//         const successResponse = JSON.parse(textResponse);
//         console.log('Notification sent successfully:', successResponse, message);
//       }
//     } catch (e) {
//       console.error('Failed to send notification:', e);
//     }
//   };









app.get('/send-notification-chat', async (req, res) => {
  const message=req.query;
  console.log('mess',message);
  try {
    await sendCustomNotificationChat(message);
    res.send('Notification sent successfully.');
  } catch (e) {
    res.status(500).send('Failed to send notification.');
  }
});


// app.get('/send-notification-multiple', async (req, res) => {
//   try {
//     await sendCustomNotificationToMultipleUsers();
//     res.send('Notification sent successfully.');
//   } catch (e) {
//     res.status(500).send('Failed to send notification.');
//   }
// });

// app.get('/send-notification-bidaccept', async (req, res) => {
//   try {
//       const message=req.query;
//       console.log('mess',message);
//     await NotificationBidAccepted(message);
//     res.send('Notification sent successfully.');
//   } catch (e) {
//     res.status(500).send('Failed to send notification.');
//   }
// });


app.get('/', (req, res) => {
  res.send('Welcome to CulturTap');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
