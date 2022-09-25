// import React from "react";
// import PropTypes from "prop-types";
// import Quality from "./quality";

// const QualitiesList = ({ qualities }) => {
//     // console.log(qualities);
//     return (
//         <>
//             {qualities.map((qual) => (
//                 <Quality key={qual._id} {...qual} />
//             ))}
//         </>
//     );
// };

// QualitiesList.propTypes = {
//     qualities: PropTypes.array
// };

// export default QualitiesList;

// import React from "react";
// import PropTypes from "prop-types";
// // import Quality from "./quality";
// import { useQualities } from "../../../hooks/useQualitie";

// const QualitiesList = ({ id }) => {
//     const { isLoading, getQualitie } = useQualities();
//     const qual = getQualitie(id);
//     if (!isLoading) {
//         return <p>{qual.name}</p>;
//     } else return "Loading...";
// };

// QualitiesList.propTypes = {
//     id: PropTypes.array
// };

// export default QualitiesList;
