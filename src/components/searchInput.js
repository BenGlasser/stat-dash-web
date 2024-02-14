import React from 'react';

const styles = {
    marginBottom: 10
};

const SearchInput = ({handleSearchValue, ...props}) => {


//     <form onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor="email">Email</label>
//       <input
//         id="email"
//         type="text"
//         value={searchValue}
//         onChange={handleSearchValue}
//       />
//     </div>
//     <button type="submit">Submit</button>
//   </form>
    return ( <form></form>
        // <Form {...props}>
        //     <InputGroup style={styles} size="lg">
        //         <Input 
        //             id="searchBox"
        //             type="text" 
        //             placeholder={"Search for summoner..."} 
        //             onChange={handleSearchValue}
        //         />
        //         <InputGroup.Button type="submit">
        //             <SearchIcon />
        //         </InputGroup.Button>
        //     </InputGroup>
        // </Form>
    );
};

export default SearchInput;
