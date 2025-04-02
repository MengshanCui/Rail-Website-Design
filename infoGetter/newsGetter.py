// ... existing code ...

const publications: Publication[] = [
  {
    year: 2019,
    title: "Artificial Intelligence–Aided Automated Detection of Railroad Trespassing",
    authors: "Zaman, A., Ren B.Z., Liu, X.",
    journal: "TR News",
    type: 'magazine',
    url: "https://rail.rutgers.edu/files/AI-Aided%20Automated%20Detection%20of%20Railroad%20Trespassing.pdf"
  },
  
  {{
    year: 2016,
    title: "Nicaragua Canal may not benefit shipping",
    authors: "Chen, J.H., Liu, X.",
    journal: "Nature",
    type: 'magazine',
    doi: "10.1038/533321d"
  },
    year: 2015,
    title: "Enhanced tank car design improves the safety of transporting crude oil and alcohol by rail",
    authors: "Barkan, C.P.L., Liu, X., Saat, M.R.",
    journal: "TR News",
    type: 'magazine',
    url: "https://rail.rutgers.edu/files/m1.pdf"
  }
];

export default function Publications() {
  const renderPublications = (type: Publication['type']) => (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Card className="mb-4">
        <CardBody>
          {publications
            .filter(pub => pub.type === type)
            .map((pub, index, arr) => (
              <React.Fragment key={pub.title}>
                <div className="py-4">
                  <h3 className="text-lg font-medium mb-2">{pub.title}</h3>
                  <p className="text-default-600 mb-2">{pub.authors}</p>
                  <p className="text-default-500 italic mb-2">{pub.journal}</p>
                  <div className="flex gap-4">
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary-500 hover:text-primary-600"
                      >
                        <Icon icon="lucide:external-link" />
                        <span>DOI</span>
                      </a>
                    )}
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary-500 hover:text-primary-600"
                      >
                        <Icon icon="lucide:file-text" />
                        <span>PDF</span>
                      </a>
                    )}
                  </div>
                </div>
                {index < arr.length - 1 && <Divider />}
              </React.Fragment>
            ))}
        </CardBody>
      </Card>
    </div>
  );

// ... rest of the code ...