import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import '../css/style.css'

import { collectNFT } from "../../actions";
import { upvoteNFT } from "../../actions";

import Token from "../sections/TokenCard";

const Home = ({ Tezos }) => {
  const selector = useSelector((state) => state.tokenData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tokens = selector.map((obj, idx) => (
    <Token
      key={idx}
      item={obj}
      onCollect={() =>
        dispatch(collectNFT({ Tezos, amount: obj.amount, id: obj.token_id }))
      }
      onClick={() =>
        navigate(`/show/${obj.token_id}`)
      }
      onUpvote={() =>


        dispatch(upvoteNFT({ Tezos, id: obj.token_id }))
      }
    />
  ));

  return <div className="container" style={{}}><div className="ui link three column grid cards" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', marginTop: '100px' }}>{tokens}</div></div>
};

export default Home;
