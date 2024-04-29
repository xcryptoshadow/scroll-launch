import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import { CardActions, CardContent, CardMedia, Button, Typography, TextField } from '@mui/material';
import { Grid, Input } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

//Group
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';

import CardHeader from '../../components/Card/CardHeader.js';
import CardBody from '../../components/Card/CardBody.js';
import CardAvatar from '../../components/Card/CardAvatar.js';
import CardFooter from '../../components/Card/CardFooter.js';

//Icon

import CardIcon from '../../components/Card/CardIcon.js';
import TwitterIcon from '@mui/icons-material/Twitter';
import PublicIcon from '@mui/icons-material/Public';
import DoNotDisturbOnTotalSilenceRoundedIcon from '@mui/icons-material/DoNotDisturbOnTotalSilenceRounded';
import SearchIcon from '@mui/icons-material/Search';

const Echolist = ({ projects }) => {
  //search
  const [searchedArray, setSearchedArray] = React.useState(projects);
  const [searchString, setSearchString] = React.useState('');

  React.useEffect(() => {
    if (searchString.length === 0) {
      setSearchedArray(projects);
    } else {
      const searchedObjects = [];
      projects.forEach((singleHeroObject, index) => {
        Object.values(singleHeroObject).every((onlyValues, valIndex) => {
          if (onlyValues.toLowerCase().includes(searchString.toLowerCase())) {
            searchedObjects.push(singleHeroObject);
            return;
          }
        });
      });
      setSearchedArray(searchedObjects);
    }
  }, [searchString]);

  console.log('these are projects', projects);

  return (
    <>
      <Grid item xs={12}>
        <div style={{ display: 'flex' }}>
          <SearchIcon style={{ marginRight: '10px', marginTop: '10px' }} />
          <Input
            className="input1"
            style={{ width: '100%', fontSize: '17px', textIndent: '35px' }}
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="Search here..."
          />
          <br />
        </div>
      </Grid>

      {searchedArray.map((company) => {
        const { picture, name, decription, website, telegram, twitter, discord } = company;
        return (
          <Grid item xs={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <NavLink
                  style={{ color: 'black' }}
                  to={{
                    pathname: `${name}`,
                  }}
                >
                  <CardIcon color="primary">
                    {/* <Icon>content_copy</Icon> */}

                    <img
                      src={picture}
                      style={{ height: '70px', width: '70px', objectFit: 'contain', borderStyle: 'solid 10px #ffffff' }}
                      alt=""
                    />
                  </CardIcon>
                </NavLink>
              </CardHeader>
              <CardContent>
                <Typography color="text.secondary" gutterBottom variant="h6" component="div">
                  <b>
                    <NavLink
                      style={{ color: 'black' }}
                      to={{
                        pathname: `${name}`,
                      }}
                    >
                      {name}
                    </NavLink>
                  </b>
                </Typography>

                <Typography variant="body1" color="text.secondary">
                  {decription.substring(1, 70)}...
                </Typography>
              </CardContent>
              <CardActions>
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <PublicIcon style={{ color: '#000' }} />
                </a>
                <a href={twitter} target="_blank" rel="noopener noreferrer">
                  <TwitterIcon style={{ color: '#000' }} />
                </a>
                <a href={discord} target="_blank" rel="noopener noreferrer">
                  <DoNotDisturbOnTotalSilenceRoundedIcon style={{ color: '#000' }} />
                </a>

                <Button fullWidth style={{ float: 'right', backgroundColor: 'white', color: 'black' }}>
                  <NavLink
                    style={{ float: 'right', backgroundColor: 'white', color: 'black' }}
                    to={{
                      pathname: `${name}`,
                    }}
                  >
                    See More
                  </NavLink>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default Echolist;
