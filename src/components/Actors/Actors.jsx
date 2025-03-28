import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetActorsDetailsQuery, useGetActorsMoviesQuery } from "../../services/TMDB";
import Movie from "../Movie/Movie";

const Actors = () => {
    const { id } = useParams();
    const { data: actorData, isFetching: isFetchingActor, error: actorError } = useGetActorsDetailsQuery(id);
    const { data: moviesData, isFetching: isFetchingMovies, error: moviesError } = useGetActorsMoviesQuery(id);

    if (isFetchingActor || isFetchingMovies) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
                <CircularProgress />
            </Box>
        );
    }

    if (actorError || !actorData) {
        return (
            <Box textAlign="center" mt={5}>
                <Typography variant="h5" color="error">
                    Oops! Unable to fetch actor details.
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ padding: '2rem', maxWidth: '1200px', margin: 'auto' }}>
            <Grid container spacing={4} alignItems="center">
                {/* Actor Image */}
                <Grid item xs={12} sm={4} md={3}>
                    <img
                        src={actorData?.profile_path ? `https://image.tmdb.org/t/p/w500/${actorData.profile_path}` : "https://via.placeholder.com/300x450?text=No+Image"}
                        alt={actorData?.name}
                        style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
                    />
                </Grid>

                {/* Actor Details */}
                <Grid item xs={12} sm={8} md={9}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom color="textPrimary">
                        {actorData?.name}
                    </Typography>

                    <Typography variant="h6" color="textSecondary" gutterBottom>
                        {actorData?.birthday ? `Born: ${actorData.birthday}` : "Birthdate not available"}
                    </Typography>

                    <Typography variant="body1" color="textPrimary" sx={{ textAlign: 'justify', lineHeight: 1.6 }}>
                        {actorData?.biography || "Biography not available."}
                    </Typography>
                </Grid>
            </Grid>

            {/* Movies Section */}
            <Box mt={5}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Movies Starring {actorData?.name}
                </Typography>

                {moviesError || !moviesData || moviesData.cast.length === 0 ? (
                    <Typography color="textSecondary">No movies found.</Typography>
                ) : (
                    <Grid container spacing={4} sx={{ padding: '1rem 0' }}>
                        {moviesData.cast.slice(0, 8).map((movie, i) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Movie movie={movie} i={i} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>
        </Box>
    );
};

export default Actors;
