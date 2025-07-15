import React from "react";
import Publication from "../components/PageComponents/Publication/Publication";
import styles from "./pages.module.css";
import googleScholarIcon from "../images/icons/google-scholar.svg";

class PublicationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  clearSearch = () => {
    this.setState({ searchQuery: "" });
  };

  filterPublications = (publications, searchQuery) => {
    if (!searchQuery.trim()) {
      return publications;
    }

    const query = searchQuery.toLowerCase();
    return publications.filter((publication) => {
      const title = (publication.node.title || "").toLowerCase();
      const authors = (publication.node.authors || "").toLowerCase();
      const journal = (publication.node.journal || "").toLowerCase();

      return (
        title.includes(query) ||
        authors.includes(query) ||
        journal.includes(query)
      );
    });
  };

  filterTechnicalReports = (reports, searchQuery) => {
    if (!searchQuery.trim()) {
      return reports;
    }

    const query = searchQuery.toLowerCase();
    return reports.filter((report) => {
      const content = (report.node.content || "").toLowerCase();
      return content.includes(query);
    });
  };

  render() {
    const { searchQuery } = this.state;

    const refereedjournalsdata = this.filterPublications(
      this.props.data.allPublicationsRefereedJournals.edges,
      searchQuery
    );
    const refereedconferencesdata = this.filterPublications(
      this.props.data.allPublicationsRefereedConferences.edges,
      searchQuery
    );
    const nonrefereedjournalsdata = this.filterPublications(
      this.props.data.allPublicationsNonrefereedJournals.edges,
      searchQuery
    );
    const publicationspatentsdata = this.filterPublications(
      this.props.data.allPublicationsPatents.edges,
      searchQuery
    );
    const publicationsbooksdata = this.filterPublications(
      this.props.data.allPublicationsBooks.edges,
      searchQuery
    );
    const publicationschaptersdata = this.filterPublications(
      this.props.data.allPublicationsChapters.edges,
      searchQuery
    );
    const publicationstechnicalreportsdata = this.filterTechnicalReports(
      this.props.data.allPublicationsTechnicalreports.edges,
      searchQuery
    );
    return (
      <div>
        {/* Table of Contents Navigation */}
        <div className={styles.tableofcontents}>
          <div className={styles.tocnavcontainer}>
            <ul className={styles.toclist}>
              <li>
                <div className={styles.tocinnercontainer}>
                  <a className={styles.toclink} href="#refereed-publications">
                    Refereed Publications
                  </a>
                </div>
                <ul className={styles.tocsublist}>
                  <li>
                    <a href="#refereed-journals">Journals</a>
                  </li>
                  <li>
                    <a href="#conference-proceedings">Conference Proceedings</a>
                  </li>
                </ul>
              </li>
              <li>
                <div className={styles.tocinnercontainer}>
                  <a
                    className={styles.toclink}
                    href="#non-refereed-publications"
                  >
                    Non-Refereed
                  </a>
                </div>
              </li>
              <li>
                <div className={styles.tocinnercontainer}>
                  <a className={styles.toclink} href="#books">
                    Books
                  </a>
                </div>
              </li>
              <li>
                <div className={styles.tocinnercontainer}>
                  <a className={styles.toclink} href="#book-chapters">
                    Book Chapters
                  </a>
                </div>
              </li>
              <li>
                <div className={styles.tocinnercontainer}>
                  <a className={styles.toclink} href="#patents">
                    Patents
                  </a>
                </div>
              </li>
              <li>
                <div className={styles.tocinnercontainer}>
                  <a className={styles.toclink} href="#technical-reports">
                    Technical Reports
                  </a>
                </div>
              </li>
              <li className={styles.tocscholar}>
                <div className={styles.tocinnercontainer}>
                  <a
                    href="https://scholar.google.ca/citations?user=dqsw1u8AAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.tocscholarlink}
                    title="Google Scholar Profile"
                  >
                    <img
                      src={googleScholarIcon}
                      alt="Google Scholar"
                      className={styles.tocscholaricon}
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.pagecontainer}>
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <div className={styles.searchIcon}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={this.handleSearchChange}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  onClick={this.clearSearch}
                  className={styles.clearButton}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {(refereedjournalsdata.length > 0 ||
            refereedconferencesdata.length > 0) && (
            <h1 id="refereed-publications">Refereed Publications</h1>
          )}

          {refereedjournalsdata.length > 0 && (
            <div>
              <h2 id="refereed-journals">Journals</h2>
              {refereedjournalsdata.map((row, i) => (
                <Publication
                  key={i}
                  number={i + 1}
                  title={row.node.title}
                  authors={row.node.authors}
                  journal={row.node.journal}
                />
              ))}
            </div>
          )}

          {refereedconferencesdata.length > 0 && (
            <div>
              <h2 id="conference-proceedings">Conference Proceedings</h2>
              {refereedconferencesdata.map((row, i) => (
                <Publication
                  key={i}
                  number={i + 1}
                  title={row.node.title}
                  authors={row.node.authors}
                  journal={row.node.journal}
                />
              ))}
            </div>
          )}
          {nonrefereedjournalsdata.length > 0 && (
            <div>
              <h1 id="non-refereed-publications">Non-Refereed Publications</h1>
              <h2>Journals</h2>
              {nonrefereedjournalsdata.map((row, i) => (
                <Publication
                  key={i}
                  number={i + 1}
                  title={row.node.title}
                  authors={row.node.authors}
                  journal={row.node.journal}
                />
              ))}
            </div>
          )}
          {publicationsbooksdata.length > 0 && (
            <div>
              <h1 id="books">Books</h1>
              {publicationsbooksdata.map((row, i) => (
                <Publication
                  key={i}
                  number={i + 1}
                  title={row.node.title}
                  authors={row.node.authors}
                  journal={row.node.journal}
                />
              ))}
            </div>
          )}
          {publicationschaptersdata.length > 0 && (
            <div>
              <h1 id="book-chapters">Chapters in Books</h1>
              {publicationschaptersdata.map((row, i) => (
                <Publication
                  key={i}
                  number={i + 1}
                  title={row.node.title}
                  authors={row.node.authors}
                  journal={row.node.journal}
                />
              ))}
            </div>
          )}
          {publicationspatentsdata.length > 0 && (
            <div>
              <h1 id="patents">Patents</h1>
              {publicationspatentsdata.map((row, i) => (
                <Publication
                  key={i}
                  number={i + 1}
                  title={row.node.title}
                  authors={row.node.authors}
                  journal={row.node.journal}
                />
              ))}
            </div>
          )}
          {publicationstechnicalreportsdata.length > 0 && (
            <div>
              <h1 id="technical-reports">Technical Reports</h1>
              {publicationstechnicalreportsdata.map((row, i) => (
                <p key={i}>
                  {i + 1}. {row.node.content}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PublicationPage;

export const query = graphql`
  query PublicationsQuery {
    allPublicationsRefereedJournals: allPublicationsRefereedJournalsCsv {
      edges {
        node {
          title
          authors
          journal
        }
      }
    }
    allPublicationsRefereedConferences: allPublicationsRefereedConferencesCsv {
      edges {
        node {
          title
          authors
          journal
        }
      }
    }
    allPublicationsNonrefereedJournals: allPublicationsNonrefereedJournalsCsv {
      edges {
        node {
          title
          authors
          journal
        }
      }
    }
    allPublicationsPatents: allPublicationsPatentsCsv {
      edges {
        node {
          title
          authors
          journal
        }
      }
    }
    allPublicationsBooks: allPublicationsBooksCsv {
      edges {
        node {
          title
          authors
          journal
        }
      }
    }
    allPublicationsChapters: allPublicationsChaptersCsv {
      edges {
        node {
          title
          authors
          journal
        }
      }
    }
    allPublicationsTechnicalreports: allPublicationsTechnicalreportsCsv {
      edges {
        node {
          content
        }
      }
    }
  }
`;
