// "use client";
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useDispatch, useSelector } from "react-redux";
// import { openModal, closeModal } from "@/store/slices/modalSlice";
// import { RootState } from "@/store/store";

// export const useModal = () => {
//   const dispatch = useDispatch();
//   const modalState = useSelector((state: RootState) => state.modal);

//   // Destructure modalProps to extract its properties
//   const showModal = ({
//     title,
//     description,
//     content,
//     footer,
//   }: {
//     title: string;
//     description?: string;
//     content: React.ReactNode;
//     footer?: React.ReactNode;
//   }) => {
//     dispatch(
//       openModal({
//         title, // Modal title
//         description: description as string, // Optional modal description
//         content, // The main modal content (usually a form or message)
//         footer, // Optional footer content
//         isOpen: true, // Set isOpen to true when showing the modal
//       })
//     );
//   };

//   const hideModal = () => {
//     dispatch(closeModal()); // Set isOpen to false when hiding the modal
//   };

//   return {
//     ...modalState,
//     showModal,
//     hideModal,
//   };
// };
