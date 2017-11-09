FROM python:2.7.14
# debian 8.9

MAINTAINER aokad <aokad@hgc.jp>

RUN echo "deb http://deb.debian.org/debian stretch main" > /etc/apt/sources.list && \
    echo "deb http://deb.debian.org/debian stretch-updates main" >> /etc/apt/sources.list && \
    echo "deb http://security.debian.org stretch/updates main" >> /etc/apt/sources.list && \
    apt-get -y update && \
    apt-get install -y dpkg-dev gcc g++ libc6-dev make patch tar unzip && \
    apt-get install -y zlib1g-dev  g++ dh-autoreconf libncurses-dev pkg-config libgd2-xpm-dev && \
    apt-get install -y r-base libcurl4-openssl-dev libdbd-mysql libmysqlclient-dev libgeos-dev libxml2-dev libssl-dev && \
    \
    mkdir -p /tools && \
    \
    cd /tools && \
    wget http://www.cpan.org/src/5.0/perl-5.14.4.tar.gz && \
    tar -xzf perl-5.14.4.tar.gz && \
    rm perl-5.14.4.tar.gz && \
    cd perl-5.14.4 && \
    ./Configure -des -Dprefix=/usr/local/ -Dusethreads && \
    make && \
    make install && \
    \
    cd /tools && \
    wget -nc https://github.com/ICGC-TCGA-PanCancer/PCAP-core/archive/v1.8.1.tar.gz && \
    tar xzvf v1.8.1.tar.gz && \
    rm v1.8.1.tar.gz && \
    cd PCAP-core-1.8.1 && \
    grep -l -r '/usr/bin/perl' * | xargs sed -i.bak -e 's;/usr/bin/perl;/usr/local/bin/perl;g' && \
    cpan -f JSON && \
    bash setup.sh /tools/ICGC && \
    \
    cd /tools && \
    echo "build BLAT v.34" && \
    wget http://hgdownload.soe.ucsc.edu/admin/exe/userApps.v349.src.tgz && \
    tar -xzvf userApps.v349.src.tgz && \
    rm -f userApps.v349.src.tgz && \
    cd userApps && \
    make && \
    \ 
    cd /tools && \
    echo "build bwa-0.7.8" && \
    wget http://sourceforge.net/projects/bio-bwa/files/bwa-0.7.8.tar.bz2 && \
    tar xjvf bwa-0.7.8.tar.bz2 && \
    cd bwa-0.7.8 && \
    make && \
    \ 
    cd /tools && \
    echo "build samtools-1.2" && \
    wget -nc https://sourceforge.net/projects/samtools/files/samtools/1.2/samtools-1.2.tar.bz2 && \
    tar xjvf samtools-1.2.tar.bz2 && \
    rm -f samtools-1.2.tar.bz2 && \
    cd samtools-1.2 && \
    make && \
    \ 
    cd /tools && \
    echo "build bedtools-2.24.0" && \
    wget -nc https://github.com/arq5x/bedtools2/archive/v2.24.0.tar.gz && \
    tar xzvf v2.24.0.tar.gz && \
    rm -f v2.24.0.tar.gz && \
    cd bedtools2-2.24.0 && \
    make && \
    \ 
    cd /tools && \
    echo "build libmaus-0.0.196" && \
    wget https://github.com/gt1/libmaus/archive/0.0.196-release-20150326095654.tar.gz && \
    tar xzvf 0.0.196-release-20150326095654.tar.gz && \
    rm -f 0.0.196-release-20150326095654.tar.gz && \
    cd libmaus-0.0.196-release-20150326095654 && \
    autoreconf -i -f && \
    ./configure && \
    make && \
    make install && \
    \ 
    cd /tools && \
    echo "build biobambam-0.0.191" && \
    wget -nc https://github.com/gt1/biobambam/archive/0.0.191-release-20150401083643.tar.gz && \
    tar xzvf 0.0.191-release-20150401083643.tar.gz && \
    rm -f 0.0.191-release-20150401083643.tar.gz && \
    cd biobambam-0.0.191-release-20150401083643 && \
    autoreconf -i -f && \
    ./configure && \
    make && \
    \ 
    cd /tools && \
    echo "build htslib-1.3" && \
    wget -nc https://sourceforge.net/projects/samtools/files/samtools/1.3/htslib-1.3.tar.bz2 && \
    tar xvf htslib-1.3.tar.bz2 && \
    rm -f htslib-1.3.tar.bz2 && \
    cd htslib-1.3 && \
    make && \
    \ 
    cd /tools && \
    echo "build tophat-1.0.14.Linux" && \
    wget -nc http://ccb.jhu.edu/software/tophat/downloads/tophat-1.0.14.Linux_x86_64.tar.gz && \
    tar xzvf tophat-1.0.14.Linux_x86_64.tar.gz && \
    rm -f tophat-1.0.14.Linux_x86_64.tar.gz && \
    \ 
    cd /tools && \
    echo "build STAR-2.5.2a" && \
    wget -nc https://github.com/alexdobin/STAR/archive/2.5.2a.tar.gz && \
    tar xzvf 2.5.2a.tar.gz && \
    rm -f 2.5.2a.tar.gz && \
    cd STAR-2.5.2a && \
    make

# python package
RUN pip install Cython && \
    pip install pysam && \
    pip install numpy && \
    pip install scipy && \
    pip install primer3-py && \
    \
    cd /tools && \
    wget https://github.com/bunbun/ruffus/archive/v2.6.3.tar.gz && \
    tar xzvf v2.6.3.tar.gz && \
    rm -f v2.6.3.tar.gz && \
    cd ruffus-2.6.3 && \
    python setup.py install && \
    \
    cd /tools && \
    git clone https://github.com/ravenac95/PyYAML && \
    cd PyYAML && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonPipeline/archive/v2.5.3.zip && \
    unzip v2.5.3.zip && \
    rm -f v2.5.3.zip && \
    cd GenomonPipeline-2.5.3 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonSV/archive/v0.4.2rc.zip && \
    unzip v0.4.2rc.zip && \
    rm -f v0.4.2rc.zip && \
    cd GenomonSV-0.4.2rc && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/friend1ws/sv_utils/archive/v0.4.0beta.zip && \
    unzip v0.4.0beta.zip && \
    rm -f v0.4.0beta.zip && \
    cd sv_utils-0.4.0beta && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonMutationFilter/archive/v0.2.1.zip && \
    unzip v0.2.1.zip && \
    rm -f v0.2.1.zip && \
    cd GenomonMutationFilter-0.2.1 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/EBFilter/archive/v0.2.1.zip && \
    unzip v0.2.1.zip && \
    rm -f v0.2.1.zip && \
    cd EBFilter-0.2.1 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonFisher/archive/v0.2.0.zip && \
    unzip v0.2.0.zip && \
    rm -f v0.2.0.zip && \
    cd GenomonFisher-0.2.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonMutationAnnotator/archive/v0.1.0.zip && \
    unzip v0.1.0.zip && \
    rm -f v0.1.0.zip && \
    cd GenomonMutationAnnotator-0.1.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonQC/archive/v2.0.1.zip && \
    unzip v2.0.1.zip && \
    rm -f v2.0.1.zip && \
    cd GenomonQC-2.0.1 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/aokad/GenomonPostAnalysis/archive/v1.4.1.zip && \
    unzip v1.4.1.zip && \
    rm -f v1.4.1.zip && \
    cd GenomonPostAnalysis-1.4.1 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/paplot/archive/v0.5.5.zip && \
    unzip v0.5.5.zip && \
    rm -f v0.5.5.zip && \
    cd paplot-0.5.5 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/ken0-1n/mutation_util/archive/v0.5.0.zip && \
    unzip v0.5.0.zip && \
    rm -f v0.5.0.zip && \
    cd mutation_util-0.5.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/ken0-1n/GenomonHotspotCall/archive/v0.1.0.zip && \
    unzip v0.1.0.zip && \
    rm -f v0.1.0.zip && \
    cd GenomonHotspotCall-0.1.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/fusionfusion/archive/v0.3.0.zip && \
    unzip v0.3.0.zip && \
    rm -f v0.3.0.zip && \
    cd fusionfusion-0.3.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/friend1ws/fusion_utils/archive/v0.2.0.zip && \
    unzip v0.2.0.zip && \
    rm -f v0.2.0.zip && \
    cd fusion_utils-0.2.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/friend1ws/chimera_utils/archive/v0.3.0.zip && \
    unzip v0.3.0.zip && \
    rm -f v0.3.0.zip && \
    cd chimera_utils-0.3.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/friend1ws/intron_retention_utils/archive/v0.3.0.zip && \
    unzip v0.3.0.zip && \
    rm -f v0.3.0.zip && \
    cd intron_retention_utils-0.3.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget -nc https://github.com/Genomon-Project/GenomonExpression/archive/v0.3.0.zip && \
    unzip v0.3.0.zip && \
    rm -f v0.3.0.zip && \
    cd GenomonExpression-0.3.0 && \
    python setup.py install && \
    \
    cd /tools && \
    wget https://github.com/Genomon-Project/genomon_Rscripts/archive/v0.1.3.zip && \
    unzip v0.1.3.zip && \
    rm -f v0.1.3.zip

# R package
RUN echo "options(repos='https://cran.rstudio.com/')" > .Rprofile && \
    Rscript -e "install.packages('devtools')" && \
    Rscript -e "install.packages('ggplot2')" && \
    Rscript -e "install.packages('Rcpp')" && \
    Rscript -e "install.packages('rjson')" && \
    Rscript -e "source('http://bioconductor.org/biocLite.R');biocLite(c('GenomicRanges', 'BSgenome.Hsapiens.UCSC.hg19'), ask=FALSE)" && \
    Rscript -e "library(devtools);devtools::install_github('friend1ws/pmsignature')"

CMD ["/bin/bash"]
